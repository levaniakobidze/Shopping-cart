import React from "react";
import classes from "./CartItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItemFromCart,
  increaseAmount,
  decreaseAmount,
} from "../../redux/slices/cartSlice";

function CartItem({ img, id, title, price, amount }) {
  const dispatch = useDispatch();
  const removeFromCart = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const decrease = (id) => {
    dispatch(decreaseAmount(id));
  };
  const increase = (id) => {
    dispatch(increaseAmount(id));
  };

  return (
    <section className={classes.cart_item}>
      <div className={classes.cart_item_img}>
        <img src={img} alt={title} />
      </div>
      <h1 className={classes.cart_item_title}>{title}</h1>
      <div className={classes.btns_cont}>
        <button className={classes.decrease} onClick={() => decrease(id)}>
          {"<"}
        </button>
        <span>{amount}</span>
        <button className={classes.increase} onClick={() => increase(id)}>
          {">"}
        </button>
      </div>
      <p className={classes.price}>${price}</p>

      <button className={classes.remove_btn} onClick={() => removeFromCart(id)}>
        REMOVE
      </button>
    </section>
  );
}

export default CartItem;
