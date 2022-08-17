import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialItems: [],
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
      state.initialItems = payload;
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
    filterWithSearch: (state, { payload }) => {
      const filtered = state.initialItems.filter((item) =>
        item.title.toLowerCase().includes(payload.toLowerCase())
      );
      state.listItems = filtered;
    },
    filterBrands: (state, { payload }) => {
      if (payload === "All") {
        state.listItems = state.initialItems;
        return;
      }
      const filtered = state.initialItems.filter((item) =>
        item.title.toLowerCase().includes(payload.toLowerCase())
      );
      state.listItems = filtered;
    },
    filterPrice: (state, { payload }) => {
      /////////////////////////////////
      const filteredPrice = state.listItems.filter(
        (item) => item.price > payload.from && item.price < payload.to
      );
      state.listItems = filteredPrice;
      //////////////////////////////////
    },
    restart: (state) => {
      state.listItems = state.initialItems;
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
  filterWithSearch,
  filterBrands,
  filterPrice,
  restart,
} = cartSlice.actions;

export default cartSlice.reducer;
