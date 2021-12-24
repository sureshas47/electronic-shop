import { createStore } from "redux";
import addToCart from "./reducer/reducer";

export const store = createStore(
  addToCart,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
