import React from "react";
import classes from "./CartModal.module.css";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseAmount,
  decreaseAmount,
  removeItemFromCart,
} from "../../redux/slices/cartSlice";
import { closeModal, addTimeout } from "../../redux/slices/cartModalSlice";
import { Link } from "react-router-dom";

function CartModal({ isModalAcitve }) {
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

  const closeModalHandler = () => {
    dispatch(addTimeout());
    setTimeout(() => {
      dispatch(closeModal());
    }, 100);
  };

  const closeCartModal = () => {
    dispatch(closeModal());
  };

  return (
    <div className={classes.cart_modal} onMouseLeave={closeModalHandler}>
      <div className={classes.wrapper}>
        <div className={classes.title_and_close}>
          <h3 className={classes.cart_title}>Cart</h3>
          <CloseSharpIcon
            onClick={closeCartModal}
            className={classes.close_icon}
          />
        </div>
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
                  x
                </span>
                <div className={classes.cart_modal_item_img}>
                  <img src={item.img} alt={item.title} />
                </div>
                <div className={classes.title_and_amount_btns}>
                  <h4 className={classes.title}>
                    {item.title.substr(0, 15)}...
                  </h4>
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
        <Link
          to={"/cart"}
          className={classes.open_cart_btn}
          onClick={closeCartModal}>
          {" "}
          Go to cart
        </Link>
      </div>
    </div>
  );
}

export default CartModal;
