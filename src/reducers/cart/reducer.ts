import { produce } from "immer";
import { NewOrderFormData } from "../../pages/Checkout";
import { ActionTypes } from "./actions";

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE_IN_CART:
      return produce(state, (draft) => {
        const itemAlreadyInCart = draft.coffeesInCart.find(
          (coffee) => coffee.data.id === action.payload.newCoffeeInCart.data.id
        );

        itemAlreadyInCart
          ? (itemAlreadyInCart.quantity +=
              action.payload.newCoffeeInCart.quantity)
          : draft.coffeesInCart.push(action.payload.newCoffeeInCart);
      });

    case ActionTypes.REMOVE_COFFEE_IN_CART:
      return produce(state, (draft) => {
        const coffeeIdToRemoveFromCart = draft.coffeesInCart.findIndex(
          (coffee) => coffee.data.id === action.payload.coffeeId
        );

        draft.coffeesInCart.splice(coffeeIdToRemoveFromCart, 1);
      });

    case ActionTypes.INCREASE_COFFEE_QUANTITY:
      return produce(state, (draft) => {
        const coffeeIdToIncreaseQuantity = draft.coffeesInCart.find(
          (coffee) => coffee.data.id === action.payload.coffeeId
        );

        if (coffeeIdToIncreaseQuantity) {
          coffeeIdToIncreaseQuantity.quantity += 1;
        }
      });

    case ActionTypes.DECREASE_COFFEE_QUANTITY:
      return produce(state, (draft) => {
        const coffeeIdToDecreaseQuantity = draft.coffeesInCart.find(
          (coffee) => coffee.data.id === action.payload.coffeeId
        );

        if (
          coffeeIdToDecreaseQuantity &&
          coffeeIdToDecreaseQuantity.quantity > 1
        ) {
          coffeeIdToDecreaseQuantity.quantity -= 1;
        }
      });

    case ActionTypes.NEW_ORDER:
      return produce(state, (draft) => {
        draft.order = action.payload.newOrder;

        draft.coffeesInCart = [];
      });

    default:
      return state;
  }
}
