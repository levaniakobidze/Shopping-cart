import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeMenu: false,
  activeMenuLink: "",
  onScrollNav: false,
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
    setScrollNav: (state, { payload }) => {
      state.onScrollNav = payload;
    },
  },
});

export const { toggleMenu, closeMenu, setActiveMenuLink, setScrollNav } =
  navbarSlice.actions;

export default navbarSlice.reducer;
