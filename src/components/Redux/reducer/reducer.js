import { ADD_TO_CART } from "../constant";

const initialState = {
  cartItems: [],
};
export default function addToCart(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [action.payload, ...state.cartItems],
      };
    default:
      return state;
  }
}
