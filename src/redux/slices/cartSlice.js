import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

let toastObj = {
  position: toast.POSITION.BOTTOM_RIGHT,
  autoClose: 600,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  // theme: "dark",
};
const initialState = {
  initialItems: [],
  listItems: [],
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  amount: 0,
  total: 0,
  isLoading: false,
  filterActive: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemsList: (state, { payload }) => {
      state.initialItems = payload;
      state.listItems = [];
      state.listItems = payload;
    },
    addItemToCart: (state, { payload }) => {
      const singleItem = state.listItems.find((item) => item.id === payload);
      const itemIsInCart = state.cartItems.find((item) => item.id === payload);

      if (itemIsInCart) {
        toast.error("Item is in cart already", {
          ...toastObj,
          className: "error",
        });
        return;
      } else {
        toast.success("Item added sucessfully", {
          ...toastObj,
          className: "succsess",
        });
      }

      state.cartItems = [...state.cartItems, singleItem];

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error("Cart is clear", { ...toastObj, className: "error" });
    },
    removeItemFromCart: (state, { payload }) => {
      const filtered = state.cartItems.filter((item) => item.id !== payload);
      state.cartItems = filtered;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error("Item has been removed", { ...toastObj, className: "error" });
    },
    increaseAmount: (state, { payload }) => {
      const item = state.cartItems.find((item) => item.id === payload);
      if (item.amount >= 5) {
        return;
      }
      item.amount = item.amount + 1;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseAmount: (state, { payload }) => {
      const item = state.cartItems.find((item) => item.id === payload);
      if (item.amount <= 1) {
        return;
      }
      item.amount = item.amount - 1;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
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
    toggleFilter: (state) => {
      state.filterActive = !state.filterActive;
    },
    closeFilter: (state) => {
      state.filterActive = false;
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
  clearCart,
  removeItemFromCart,
  increaseAmount,
  decreaseAmount,
  calculate,
  toggleFilter,
  closeFilter,
  filterWithSearch,
  filterBrands,
  filterPrice,
  restart,
} = cartSlice.actions;

export default cartSlice.reducer;
