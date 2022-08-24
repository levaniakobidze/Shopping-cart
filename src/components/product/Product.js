import React, { useState } from "react";
import classes from "./Product.module.css";
import { addItemToCart } from "../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { closeModal, openModal } from "../../redux/slices/cartModalSlice";
import { Link } from "react-router-dom";

function Product({ id, amount, img, title, price }) {
  const timeout = useSelector((state) => state.modal.timeout);
  const filterActive = useSelector((state) => state.cart.filterActive);
  const dispatch = useDispatch();
  const addToCartHandler = (id) => {
    dispatch(addItemToCart(id));
  };

  return (
    <div
      className={
        filterActive
          ? classes.product_wrapper
          : `${classes.product_wrapper} ${classes.active}`
      }>
      <Link to={`/details/${id}`} className={classes.product}>
        <div className={classes.product_img}>
          <img src={img} alt={title} />
        </div>
        <h1 className={classes.product_title}>{title.substr(0, 18)}</h1>
        <div className={classes.price_and_btn}>
          <p className={classes.price}>${price}</p>
        </div>
      </Link>
      <button className={classes.add_btn} onClick={() => addToCartHandler(id)}>
        <ShoppingCartOutlinedIcon />
      </button>
    </div>
  );
}

export default Product;
