import React, { useEffect, useRef } from "react";
import Card from "../Card/Card";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { phonesList, tvList } from "../../cartItems";
import { addItemsList } from "../../redux/slices/cartSlice";
import {
  openModal,
  closeModal,
  openModalPermanently,
  stopTimeout,
} from "../../redux/slices/cartModalSlice";
import CartModal from "../cartModal/CartModal";
function Navbar() {
  const { amount } = useSelector((state) => state.cart);
  const { isModalOpen } = useSelector((state) => state.modal);
  const { cartItems } = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const addItemsListHandler = (e) => {
    if (e.target.innerText.toLowerCase() === "phones") {
      dispatch(addItemsList(phonesList));
    }
    if (e.target.innerText.toLowerCase() === "tv") {
      dispatch(addItemsList(tvList));
    }
  };

  const openCartModalHandler = () => {
    dispatch(openModalPermanently());
  };

  return (
    <nav className={classes.navbar}>
      <Card className={classes.navbar_card}>
        <Link to='/' className={classes.logo}>
          <span className={classes.logo_item}></span>
          SomeOOn
        </Link>
        <ul className={classes.navbar_menu}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to={"/list"} onClick={addItemsListHandler}>
              Phones
            </Link>
          </li>
          <li>
            <Link to={"/list"} onClick={addItemsListHandler}>
              TV
            </Link>
          </li>
        </ul>
        <div className={classes.cart} onClick={openCartModalHandler}>
          <LocalMallOutlinedIcon className={classes.cart_logo} />
          <span className={classes.amount}>{amount}</span>
        </div>

        {isModalOpen && <CartModal />}
      </Card>
    </nav>
  );
}

export default Navbar;
