import React from "react";
import classes from "./CartModal.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseAmount,
  decreaseAmount,
  removeItemFromCart,
} from "../../redux/slices/cartSlice";
import {
  closeModal,
  stopTimeout,
  addTimeout,
} from "../../redux/slices/cartModalSlice";
import { Link } from "react-router-dom";

function CartModal() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const total = useSelector((state) => state.cart.total);

  const decreaseHandler = (id) => {
    dispatch(decreaseAmount(id));
  };
  const increaseHandler = (id) => {
    dispatch(increaseAmount(id));
  };
  const removeHandler = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const openModalHandler = () => {
    dispatch(stopTimeout());
  };
  const closeModalHandler = () => {
    dispatch(addTimeout());
    setTimeout(() => {
      dispatch(closeModal());
    }, 1000);
  };

  return (
    <div
      className={classes.cart_modal}
      onMouseOver={openModalHandler}
      onMouseLeave={closeModalHandler}>
      <div className={classes.wrapper}>
        {cartItems.length == 0 && (
          <h1 className={classes.empty}>Cart is empty</h1>
        )}
        {cartItems &&
          cartItems.map((item) => {
            return (
              <div className={classes.cart_modal_item}>
                <span
                  className={classes.remove}
                  onClick={() => removeHandler(item.id)}>
                  X
                </span>
                <div className={classes.cart_modal_item_img}>
                  <img src={item.img} alt={item.title} />
                </div>
                <div className={classes.title_and_amount_btns}>
                  <h4 className={classes.title}>{item.title}</h4>
                  <div className={classes.amount_btns_cont}>
                    <button
                      className={classes.decrease}
                      onClick={() => decreaseHandler(item.id)}>
                      -
                    </button>
                    <span className={classes.amount}>{item.amount}</span>
                    <button
                      className={classes.increase}
                      onClick={() => increaseHandler(item.id)}>
                      +
                    </button>
                  </div>
                </div>
                <span className={classes.price}>${item.price}</span>
              </div>
            );
          })}
      </div>
      <span className={classes.total}>
        <span className={classes.sub_total}>sub-total: </span>${total}
      </span>
      <div className={classes.open_cart_btn_cont}>
        <Link to={"/cart"} className={classes.open_cart_btn}>
          {" "}
          Go to cart
        </Link>
      </div>
    </div>
  );
}

export default CartModal;
