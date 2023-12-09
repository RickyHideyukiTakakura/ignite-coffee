/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, createContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { NewOrderFormData } from "../pages/Checkout";
import {
  addCoffeeInCartAction,
  decreaseCoffeeQuantityAction,
  increaseCoffeeQuantityAction,
  newOrderAction,
  removeCoffeeInCartAction,
} from "../reducers/cart/actions";
import { cartReducer } from "../reducers/cart/reducer";

export interface CoffeeDataType {
  id: string;
  title: string;
  description: string;
  tags: string[];
  price: number;
  image: string;
}

export interface CoffeeType {
  data: CoffeeDataType;
  quantity: number;
}

interface CartContextProviderProps {
  children: ReactNode;
}

interface CartContextType {
  coffeesInCart: CoffeeType[];
  order: NewOrderFormData | null;

  addCoffeeInCart: (data: CoffeeDataType, quantity: number) => void;
  removeCoffeeInCart: (coffeeId: string) => void;
  increaseQuantity: (coffeeId: string) => void;
  decreaseQuantity: (coffeeId: string) => void;
  createNewOrder: (data: NewOrderFormData) => void;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const navigate = useNavigate();

  const [cartState, dispatch] = useReducer(cartReducer, {
    coffeesInCart: [],
    order: null,
  });

  const { coffeesInCart, order } = cartState;

  function addCoffeeInCart(data: CoffeeDataType, quantity: number) {
    const newCoffeeInCart = {
      data,
      quantity,
    };

    dispatch(addCoffeeInCartAction(newCoffeeInCart));
  }

  function removeCoffeeInCart(coffeeId: string) {
    dispatch(removeCoffeeInCartAction(coffeeId));
  }

  function increaseQuantity(coffeeId: string) {
    dispatch(increaseCoffeeQuantityAction(coffeeId));
  }

  function decreaseQuantity(coffeeId: string) {
    dispatch(decreaseCoffeeQuantityAction(coffeeId));
  }

  function createNewOrder(data: NewOrderFormData) {
    const newOrder: NewOrderFormData = {
      cep: data.cep,
      street: data.street,
      number: data.number,
      complement: data.complement,
      neighborhood: data.neighborhood,
      city: data.city,
      state: data.state,
      paymentMethod: data.paymentMethod,
    };

    dispatch(newOrderAction(newOrder));

    navigate("/success");
  }

  return (
    <CartContext.Provider
      value={{
        coffeesInCart,
        addCoffeeInCart,
        removeCoffeeInCart,
        increaseQuantity,
        decreaseQuantity,
        createNewOrder,
        order,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
