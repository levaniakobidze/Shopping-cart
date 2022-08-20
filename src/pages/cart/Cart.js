import React from "react";
import classes from "./Cart.module.css";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../components/Card/Card";
import CartItem from "../../components/cartItem/CartItem";
import { clearCart } from "../../redux/slices/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const { cartItems, total } = useSelector((state) => state.cart);

  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  return (
    <section className={classes.cart}>
      <Card className={classes.cart_card}>
        <div className={classes.cart_items_wrapper}>
          <div className={classes.list}>
            {cartItems.length < 1 && (
              <h1 className={classes.empty}>Cart is empty</h1>
            )}
            {cartItems &&
              cartItems.map((item, index) => {
                return <CartItem key={item.id} {...item} />;
              })}
          </div>
          {cartItems.length > 1 && (
            <button className={classes.clear_cart} onClick={clearCartHandler}>
              Clear cart
            </button>
          )}
        </div>
        <div className={classes.total_wrapper}>
          <div className={classes.total_cont}>
            <h3 className={classes.total_title}>Total</h3>
            <div className={classes.sub_tota_cont}>
              <span className={classes.sub_total}>sub-total:</span> $
              {total.toString().substr(0, 10)}
            </div>
            <button className={classes.check_out}>Check out</button>
          </div>
        </div>
      </Card>
    </section>
  );
}

export default Cart;
