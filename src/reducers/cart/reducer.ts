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
    case ActionTypes.ADD_COFFEE_IN_CART: {
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

    case ActionTypes.REMOVE_COFFEE_IN_CART:
      return {
        ...state,
        coffeesInCart: state.coffeesInCart.filter(
          (coffee) => coffee.data.id !== action.payload.coffeeId
        ),
      };

    case ActionTypes.INCREASE_COFFEE_QUANTITY:
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

    case ActionTypes.DECREASE_COFFEE_QUANTITY:
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

    case ActionTypes.NEW_ORDER:
      return {
        ...state,
        coffeesInCart: [],
        order: action.payload.newOrder,
      };

    default:
      return state;
  }
}
