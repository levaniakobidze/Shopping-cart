import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeMenu: false,
  activeMenuLink: "",
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
    setActiveMenuLink: (state, payload) => {
      state.activeMenuLink = payload;
    },
  },
});

export const { toggleMenu, closeMenu, setActiveMenuLink } = navbarSlice.actions;

export default navbarSlice.reducer;
