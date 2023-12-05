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

interface CoffeeContextProviderProps {
  children: ReactNode;
}

interface CoffeeContextType {
  coffeesInCart: CoffeeType[];
  order: NewOrderFormData;

  addCoffeeInCart: (data: CoffeeDataType, quantity: number) => void;
  removeCoffeeInCart: (coffeeId: string) => void;
  createNewOrder: (data: NewOrderFormData) => void;
}

export const CoffeeContext = createContext({} as CoffeeContextType);

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const navigate = useNavigate();

  const [coffeesInCart, dispatch] = useReducer(
    (state: CoffeeType[], action: any) => {
      if (action.type === "ADD_COFFEE_IN_CART") {
        return [...state, action.payload.newCoffeeInCart];
      }

      if (action.type === "REMOVE_COFFEE_IN_CART") {
        return state.filter(
          (coffee) => coffee.data.id !== action.payload.coffeeId
        );
      }

      return state;
    },
    []
  );
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
    <CoffeeContext.Provider
      value={{
        coffeesInCart,
        addCoffeeInCart,
        removeCoffeeInCart,
        createNewOrder,
        order,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
