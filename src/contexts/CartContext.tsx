/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, createContext, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NewOrderFormData } from "../pages/Checkout";

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

interface CartState {
  coffeesInCart: CoffeeType[];
  order: NewOrderFormData | null;
}

interface CartContextProviderProps {
  children: ReactNode;
}

interface CartContextType {
  coffeesInCart: CoffeeType[];
  order: NewOrderFormData;

  addCoffeeInCart: (data: CoffeeDataType, quantity: number) => void;
  removeCoffeeInCart: (coffeeId: string) => void;
  increaseQuantity: (coffeeId: string) => void;
  decreaseQuantity: (coffeeId: string) => void;
  createNewOrder: (data: NewOrderFormData) => void;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const navigate = useNavigate();

  const [cartState, dispatch] = useReducer(
    (state: CartState, action: any) => {
      // switch (action.type) {
      //   case 'ADD_COFFEE_IN_CART':
      //   case 'REMOVE_COFFEE_IN_CART':
      //   case 'INCREASE_COFFEE_QUANTITY':
      //   case 'DECREASE_COFFEE_QUANTITY':
      //   case 'NEW_ORDER':
      //   default:
      //     return state
      // }

      if (action.type === "ADD_COFFEE_IN_CART") {
        const itemAlreadyInCart = state.coffeesInCart.find(
          (coffee) => coffee.data.id === action.payload.newCoffeeInCart.data.id
        );

        if (itemAlreadyInCart) {
          return {
            ...state,
            coffeesInCart: state.coffeesInCart.map((coffee) =>
              coffee.data.id === action.payload.newCoffeeInCart.data.id
                ? {
                    ...coffee,
                    quantity:
                      coffee.quantity + action.payload.newCoffeeInCart.quantity,
                  }
                : coffee
            ),
          };
        } else {
          return {
            ...state,
            coffeesInCart: [
              ...state.coffeesInCart,
              action.payload.newCoffeeInCart,
            ],
          };
        }
      }

      if (action.type === "REMOVE_COFFEE_IN_CART") {
        return {
          ...state,
          coffeesInCart: state.coffeesInCart.filter(
            (coffee) => coffee.data.id !== action.payload.coffeeId
          ),
        };
      }

      if (action.type === "INCREASE_COFFEE_QUANTITY") {
        return {
          ...state,
          coffeesInCart: state.coffeesInCart.map((coffee) => {
            if (coffee.data.id === action.payload.coffeeId) {
              return {
                ...coffee,
                quantity: coffee.quantity + 1,
              };
            }

            return coffee;
          }),
        };
      }

      if (action.type === "DECREASE_COFFEE_QUANTITY") {
        return {
          ...state,
          coffeesInCart: state.coffeesInCart.map((coffee) => {
            if (
              coffee.data.id === action.payload.coffeeId &&
              coffee.quantity > 1
            ) {
              return {
                ...coffee,
                quantity: coffee.quantity - 1,
              };
            }

            return coffee;
          }),
        };
      }

      return state;
    },
    {
      coffeesInCart: [],
      order: null,
    }
  );

  const { coffeesInCart } = cartState;
  const [order, setOrder] = useState({} as NewOrderFormData);

  function addCoffeeInCart(data: CoffeeDataType, quantity: number) {
    const newCoffeeInCart = {
      data,
      quantity,
    };

    dispatch({
      type: "ADD_COFFEE_IN_CART",
      payload: {
        newCoffeeInCart,
      },
    });
  }

  function removeCoffeeInCart(coffeeId: string) {
    dispatch({
      type: "REMOVE_COFFEE_IN_CART",
      payload: {
        coffeeId,
      },
    });
  }

  function increaseQuantity(coffeeId: string) {
    dispatch({
      type: "INCREASE_COFFEE_QUANTITY",
      payload: {
        coffeeId,
      },
    });
  }

  function decreaseQuantity(coffeeId: string) {
    dispatch({
      type: "DECREASE_COFFEE_QUANTITY",
      payload: {
        coffeeId,
      },
    });
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

    setOrder(newOrder);

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
