import { ReactNode, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NewOrderFormData } from "../pages/Checkout";

export interface CoffeeType {
  id: string;
  title: string;
  description: string;
  tags: string[];
  price: number;
  image: string;
}

interface CoffeeContextProviderProps {
  children: ReactNode;
}

interface CoffeeContextType {
  coffeesInCart: CoffeeType[];
  order: NewOrderFormData;
  addCoffeeInCart: (data: CoffeeType) => void;
  createNewOrder: (data: NewOrderFormData) => void;
}

export const CoffeeContext = createContext({} as CoffeeContextType);

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const navigate = useNavigate();

  const [coffeesInCart, setCoffeesInCart] = useState<CoffeeType[]>([]);
  const [order, setOrder] = useState({} as NewOrderFormData);

  function addCoffeeInCart(data: CoffeeType) {
    setCoffeesInCart((state) => [...state, data]);
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
      value={{ coffeesInCart, addCoffeeInCart, createNewOrder, order }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
