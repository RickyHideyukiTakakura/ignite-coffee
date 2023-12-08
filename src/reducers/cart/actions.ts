import { NewOrderFormData } from "../../pages/Checkout";
import { CoffeeType } from "./reducer";

export enum ActionTypes {
  ADD_COFFEE_IN_CART = "ADD_COFFEE_IN_CART",
  REMOVE_COFFEE_IN_CART = "REMOVE_COFFEE_IN_CART",
  INCREASE_COFFEE_QUANTITY = "INCREASE_COFFEE_QUANTITY",
  DECREASE_COFFEE_QUANTITY = "DECREASE_COFFEE_QUANTITY",
  NEW_ORDER = "NEW_ORDER",
}

export function addCoffeeInCartAction(newCoffeeInCart: CoffeeType) {
  return {
    type: ActionTypes.ADD_COFFEE_IN_CART,
    payload: {
      newCoffeeInCart,
    },
  };
}

export function removeCoffeeInCartAction(coffeeId: string) {
  return {
    type: ActionTypes.REMOVE_COFFEE_IN_CART,
    payload: {
      coffeeId,
    },
  };
}

export function increaseCoffeeQuantityAction(coffeeId: string) {
  return {
    type: ActionTypes.INCREASE_COFFEE_QUANTITY,
    payload: {
      coffeeId,
    },
  };
}

export function decreaseCoffeeQuantityAction(coffeeId: string) {
  return {
    type: ActionTypes.DECREASE_COFFEE_QUANTITY,
    payload: {
      coffeeId,
    },
  };
}

export function newOrderAction(newOrder: NewOrderFormData) {
  return {
    type: ActionTypes.NEW_ORDER,
    payload: {
      newOrder,
    },
  };
}
