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
import { phonesList, tvList, laptopsList } from "../../cartItems";
import { addItemsList, closeFilter } from "../../redux/slices/cartSlice";
import { openModalPermanently } from "../../redux/slices/cartModalSlice";
import { closeMenu, toggleMenu } from "../../redux/slices/navbarSlice";

function Navbar() {
  const { amount } = useSelector((state) => state.cart);
  const { isModalOpen } = useSelector((state) => state.modal);
  const { activeMenu } = useSelector((state) => state.navMenu);

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
  };

  const openCartModalHandler = () => {
    dispatch(openModalPermanently());
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const closeMenuHandler = () => {
    dispatch(closeMenu());
    dispatch(closeFilter());
  };

  return (
    <nav className={classes.navbar}>
      {isModalOpen && <CartModal />}
      <Card className={classes.navbar_card}>
        <div className={classes.burger_menu} onClick={toggleMenuHandler}>
          <MenuIcon className={classes.burger_menu_icon} />
        </div>
        <Link to='/' className={classes.logo}>
          Tech Shop
        </Link>
        <div className={classes.navbar_and_cart_wrapper}>
          <ul
            className={
              !activeMenu
                ? classes.navbar_menu
                : `${classes.navbar_menu} ${classes.navbar_menu_active}`
            }
            onClick={closeMenuHandler}>
            <div className={classes.close_icon_cont}>
              <CloseSharpIcon className={classes.close_menu_icon} />
            </div>
            <Link
              to={"/list/phones"}
              onClick={addItemsListHandler}
              className={classes.dropdown_menu_link}>
              <PhoneIphoneRoundedIcon className={classes.nav_drop_menu_icon} />
              Phones
            </Link>
            <Link
              to={"/list/tv"}
              onClick={addItemsListHandler}
              className={classes.dropdown_menu_link}>
              <TvIcon className={classes.nav_drop_menu_icon} />
              TV
            </Link>
            <Link
              to={"/list/laptops"}
              onClick={addItemsListHandler}
              className={classes.dropdown_menu_link}>
              <LaptopChromebookRoundedIcon
                className={classes.nav_drop_menu_icon}
              />
              Laptops
            </Link>
            <Link
              to={"/list"}
              onClick={addItemsListHandler}
              className={classes.dropdown_menu_link}>
              <HeadphonesIcon className={classes.nav_drop_menu_icon} />
              Headphones
            </Link>
            <Link
              to={"/list"}
              onClick={addItemsListHandler}
              className={classes.dropdown_menu_link}>
              <CameraAltIcon className={classes.nav_drop_menu_icon} />
              Cameras
            </Link>
          </ul>
          <div className={classes.cart} onClick={openCartModalHandler}>
            <ShoppingCartOutlinedIcon className={classes.cart_logo} />
            <span className={classes.amount}>{amount}</span>
          </div>
        </div>
      </Card>
    </nav>
  );
}

export default Navbar;
