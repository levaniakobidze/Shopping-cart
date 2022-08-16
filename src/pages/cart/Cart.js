import React from "react";
import classes from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../../components/cartItem/CartItem";

function Cart() {
  const { cartItems, total } = useSelector((state) => state.cart);
  console.log(cartItems);
  return (
    <section className={classes.cart}>
      <div>
        {cartItems &&
          cartItems.map((item, index) => {
            return <CartItem key={item.id} {...item} />;
          })}
      </div>
      <div>{total}</div>
    </section>
  );
}

export default Cart;
