import { CoffeeDataType } from "./reducer";

export enum ActionTypes {
  ADD_COFFEE_IN_CART = "ADD_COFFEE_IN_CART",
  REMOVE_COFFEE_IN_CART = "REMOVE_COFFEE_IN_CART",
  INCREASE_COFFEE_QUANTITY = "INCREASE_COFFEE_QUANTITY",
  DECREASE_COFFEE_QUANTITY = "DECREASE_COFFEE_QUANTITY",
  NEW_ORDER = "NEW_ORDER",
}

export function addCoffeeInCartAction(coffee: CoffeeDataType) {
  return {
    type: ActionTypes.ADD_COFFEE_IN_CART,
    payload: {
      coffee,
    },
  };
}

export function removeCoffeeInCartAction() {
  return {
    type: ActionTypes.REMOVE_COFFEE_IN_CART,
  };
}

export function increaseCoffeeQuantityAction() {
  return {
    type: ActionTypes.INCREASE_COFFEE_QUANTITY,
  };
}

export function decreaseCoffeeQuantityAction() {
  return {
    type: ActionTypes.DECREASE_COFFEE_QUANTITY,
  };
}

export function newOrderAction() {
  return {
    type: ActionTypes.NEW_ORDER,
  };
}
