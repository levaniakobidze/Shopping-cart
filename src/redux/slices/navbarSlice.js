import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeMenu: false,
};

const navbarSlice = createSlice({
  name: "navbarSlice",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.activeMenu = !state.activeMenu;
    },
    closeMenu: (state) => {
      state.activeMenu = false;
    },
  },
});

export const { toggleMenu, closeMenu } = navbarSlice.actions;

export default navbarSlice.reducer;
