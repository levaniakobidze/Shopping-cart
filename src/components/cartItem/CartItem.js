import React from "react";
import classes from "./CartItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItemFromCart,
  increaseAmount,
  decreaseAmount,
} from "../../redux/slices/cartSlice";

function CartItem({ img, id, title, description, amount }) {
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
    <section>
      <h1>{title}</h1>
      <img src={img} alt={title} />
      <p>{description}</p>

      <div>
        <button onClick={() => decrease(id)}>-</button>
        <span>{amount}</span>
        <button onClick={() => increase(id)}>+</button>
      </div>

      <button onClick={() => removeFromCart(id)}>REMOVE</button>
    </section>
  );
}

export default CartItem;
