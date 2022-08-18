import React, { useState } from "react";
import classes from "./Product.module.css";
import { addItemToCart } from "../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { closeModal, openModal } from "../../redux/slices/cartModalSlice";

function Product({ id, amount, img, title, price }) {
  const timeout = useSelector((state) => state.modal.timeout);
  const dispatch = useDispatch();
  const addToCartHandler = (id) => {
    dispatch(addItemToCart(id));
    dispatch(openModal());
    setTimeout(() => {
      if (timeout) {
        console.log(timeout);
        dispatch(closeModal());
      }
    }, 1000);
  };

  return (
    <section className={classes.product}>
      <div className={classes.product_img}>
        <img src={img} alt={title} />
      </div>
      <h1 className={classes.product_title}>{title.substr(0, 18)}</h1>
      <div className={classes.price_and_btn}>
        <p className={classes.price}>${price}</p>
        <button
          className={classes.add_btn}
          onClick={() => addToCartHandler(id)}>
          <LocalMallOutlinedIcon />
        </button>
      </div>
    </section>
  );
}

export default Product;
