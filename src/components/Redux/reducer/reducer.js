import { ADD_TO_CART } from "../constant";

const initialState = {
  cartItems: [],
  counter: 0,
};
export default function addToCart(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        counter: state.counter + 1,
      };
    default:
      return state;
  }
}
