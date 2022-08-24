import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import modalReducer from "./slices/cartModalSlice";
import navMenuReducer from "./slices/navbarSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
    navMenu: navMenuReducer,
  },
});

export default store;
