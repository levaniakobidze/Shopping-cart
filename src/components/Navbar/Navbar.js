import React from "react";
import Card from "../Card/Card";
import classes from "./Navbar.module.css";
import CartModal from "../cartModal/CartModal";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIphoneRoundedIcon from "@mui/icons-material/PhoneIphoneRounded";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import LaptopChromebookRoundedIcon from "@mui/icons-material/LaptopChromebookRounded";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import TvIcon from "@mui/icons-material/Tv";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  phonesList,
  tvList,
  headphonesList,
  camerasList,
  laptopsList,
} from "../../cartItems";
import { addItemsList } from "../../redux/slices/cartSlice";
import { openModalPermanently } from "../../redux/slices/cartModalSlice";
import {
  closeMenu,
  toggleMenu,
  setActiveMenuLink,
  setScrollNav,
} from "../../redux/slices/navbarSlice";

function Navbar() {
  const { amount } = useSelector((state) => state.cart);
  const { isModalOpen } = useSelector((state) => state.modal);
  const { activeMenu, activeMenuLink, onScrollNav } = useSelector(
    (state) => state.navMenu
  );

  const dispatch = useDispatch();

  const addItemsListHandler = (e) => {
    if (e.target.innerText.toLowerCase() === "phones") {
      dispatch(addItemsList(phonesList));
    }
    if (e.target.innerText.toLowerCase() === "tv") {
      dispatch(addItemsList(tvList));
    }
    if (e.target.innerText.toLowerCase() === "laptops") {
      dispatch(addItemsList(laptopsList));
    }
    if (e.target.innerText.toLowerCase() === "headphones") {
      dispatch(addItemsList(headphonesList));
    }
    if (e.target.innerText.toLowerCase() === "cameras") {
      dispatch(addItemsList(camerasList));
    }
    dispatch(setActiveMenuLink(e.target.innerText));
  };

  const openCartModalHandler = () => {
    dispatch(openModalPermanently());
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const closeMenuHandler = () => {
    dispatch(closeMenu());
    // dispatch(closeFilter());
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 80) {
      dispatch(setScrollNav(true));
    } else {
      dispatch(setScrollNav(false));
    }
  });

  return (
    <nav
      id="navbar"
      className={
        !onScrollNav
          ? classes.navbar
          : `${classes.navbar} ${classes.scroll_nav}`
      }
    >
      {isModalOpen && <CartModal />}
      <Card className={classes.navbar_card}>
        <div className={classes.burger_menu} onClick={toggleMenuHandler}>
          <MenuIcon
            className={
              !onScrollNav
                ? classes.burger_menu_icon
                : classes.burger_menu_icon_scroll
            }
          />
        </div>
        <Link
          to="/"
          className={
            !onScrollNav
              ? classes.logo
              : `${classes.logo} ${classes.on_scroll_logo}`
          }
          onClick={() => dispatch(setActiveMenuLink(""))}
        >
          SHOPPIT
        </Link>
        <div
          className={
            !onScrollNav
              ? classes.navbar_and_cart_wrapper
              : `${classes.navbar_and_cart_wrapper} ${classes.navbar_and_cart_wrapper_scroll}`
          }
        >
          <ul
            className={
              !activeMenu
                ? classes.navbar_menu
                : `${classes.navbar_menu} ${classes.navbar_menu_active}`
            }
            onClick={closeMenuHandler}
          >
            <div className={classes.close_icon_cont}>
              <CloseSharpIcon className={classes.close_menu_icon} />
            </div>
            <Link
              to={"/list/phones"}
              onClick={addItemsListHandler}
              className={activeMenuLink.payload === "Phones" && classes.active}
            >
              <PhoneIphoneRoundedIcon className={classes.nav_drop_menu_icon} />
              Phones
            </Link>
            <Link
              to={"/list/tv"}
              onClick={addItemsListHandler}
              className={activeMenuLink.payload === "TV" && classes.active}
            >
              <TvIcon className={classes.nav_drop_menu_icon} />
              TV
            </Link>
            <Link
              to={"/list/laptops"}
              onClick={addItemsListHandler}
              className={activeMenuLink.payload === "Laptops" && classes.active}
            >
              <LaptopChromebookRoundedIcon
                className={classes.nav_drop_menu_icon}
              />
              Laptops
            </Link>
            <Link
              to={"/list/headphones"}
              onClick={addItemsListHandler}
              className={
                activeMenuLink.payload === "Headphones" && classes.active
              }
            >
              <HeadphonesIcon className={classes.nav_drop_menu_icon} />
              Headphones
            </Link>
            <Link
              to={"/list/cameras"}
              onClick={addItemsListHandler}
              className={activeMenuLink.payload === "Cameras" && classes.active}
            >
              <CameraAltIcon className={classes.nav_drop_menu_icon} />
              Cameras
            </Link>
          </ul>
          <div className={classes.cart} onClick={openCartModalHandler}>
            <ShoppingCartOutlinedIcon
              className={
                !onScrollNav ? classes.cart_logo : classes.cart_logo_scroll
              }
            />
            <span
              className={!onScrollNav ? classes.amount : classes.amount_scroll}
            >
              {amount}
            </span>
          </div>
        </div>
      </Card>
    </nav>
  );
}

export default Navbar;
