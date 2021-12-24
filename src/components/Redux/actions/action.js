import { ADD_TO_CART } from "../constant";

export function addToCart(payload) {
  return {
    type: ADD_TO_CART,
    payload: payload,
  };
}
