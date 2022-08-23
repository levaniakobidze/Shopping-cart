import React from "react";
import Card from "../Card/Card";
import classes from "./Navbar.module.css";
import CartModal from "../cartModal/CartModal";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import PhoneIphoneRoundedIcon from "@mui/icons-material/PhoneIphoneRounded";
import LaptopChromebookRoundedIcon from "@mui/icons-material/LaptopChromebookRounded";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import TvIcon from "@mui/icons-material/Tv";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { phonesList, tvList, laptopsList } from "../../cartItems";
import { addItemsList } from "../../redux/slices/cartSlice";
import { openModalPermanently } from "../../redux/slices/cartModalSlice";

function Navbar() {
  const { amount } = useSelector((state) => state.cart);
  const { isModalOpen } = useSelector((state) => state.modal);
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

  return (
    <nav className={classes.navbar}>
      {isModalOpen && <CartModal />}
      <Card className={classes.navbar_card}>
        <Link to='/' className={classes.logo}>
          <span className={classes.logo_item}>Tech-Shop</span>
        </Link>
        <div className={classes.navbar_and_cart_wrapper}>
          <ul className={classes.navbar_menu}>
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
            <LocalMallOutlinedIcon className={classes.cart_logo} />
            <span className={classes.amount}>{amount}</span>
          </div>
        </div>
      </Card>
    </nav>
  );
}

export default Navbar;
