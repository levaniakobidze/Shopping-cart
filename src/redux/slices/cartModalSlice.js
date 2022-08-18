import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  isModalOpen: false,
  timeout: true,
};

const cartModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
    openModalPermanently: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
    stopTimeout: (state) => {
      state.timeout = false;
    },
    addTimeout: (state) => {
      state.timeout = true;
    },
  },
});

export const {
  openModal,
  closeModal,
  openModalPermanently,
  addTimeout,
  stopTimeout,
} = cartModalSlice.actions;

export default cartModalSlice.reducer;
