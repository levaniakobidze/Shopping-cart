import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listItems: [],
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemsList: (state, { payload }) => {
      state.listItems = payload;
    },
    addItemToCart: (state, { payload }) => {
      const singleItem = state.listItems.find((item) => item.id === payload);
      const itemIsInCart = state.cartItems.find((item) => item.id === payload);
      if (itemIsInCart) {
        return;
      }
      state.cartItems = [...state.cartItems, singleItem];
    },
    removeItemFromCart: (state, { payload }) => {
      const filtered = state.cartItems.filter((item) => item.id !== payload);
      state.cartItems = filtered;
    },
    increaseAmount: (state, { payload }) => {
      const item = state.cartItems.find((item) => item.id === payload);
      if (item.amount >= 5) {
        return;
      }
      item.amount = item.amount + 1;
    },
    decreaseAmount: (state, { payload }) => {
      const item = state.cartItems.find((item) => item.id === payload);
      if (item.amount <= 1) {
        return;
      }
      item.amount = item.amount - 1;
    },
    calculate: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount = amount + item.amount;
        total = total + item.price * item.amount;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export const {
  addItemsList,
  addItemToCart,
  removeItemFromCart,
  increaseAmount,
  decreaseAmount,
  calculate,
} = cartSlice.actions;

export default cartSlice.reducer;
