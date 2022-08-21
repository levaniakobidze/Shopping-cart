import React, { useEffect, useState } from "react";
import classes from "./ProductDetails.module.css";
import Card from "../../components/Card/Card";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import { openModal as cartModal } from "../../redux/slices/cartModalSlice";

function ProductDetails() {
  const [product, setProduct] = useState([]);
  const [index, setIndex] = useState(0);
  const [modalIndex, setModalIndex] = useState(index);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const items = useSelector((state) => state.cart.listItems);
  const timeout = useSelector((state) => state.modal.timeout);
  let navigate = useNavigate();

  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (items.length < 1) {
      navigate("/");
      return;
    }
    const filtered = items.filter((item) => item.id === params.Id.toString());
    setProduct(filtered);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
    setModalIndex(index);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleClick = (e) => {
    e.stopPropagation();
  };

  const addItemToCartHandler = (id) => {
    dispatch(addItemToCart(id));
    dispatch(cartModal());
    setTimeout(() => {
      if (timeout) {
        console.log(timeout);
        dispatch(closeModal());
      }
    }, 300);
  };

  return (
    <section className={classes.product_details}>
      <Card className={classes.details_card}>
        {product.length > 0 && (
          <>
            <div className={classes.details}>
              <div className={classes.product_imgs}>
                <div className={classes.main_img} onClick={openModal}>
                  <img src={product[0].listImg[index]} alt={product.title} />
                </div>
                <div className={classes.small_imgs}>
                  <div className={classes.sm_img}>
                    <img
                      src={product[0].listImg[0]}
                      alt={product.title}
                      onClick={() => setIndex(0)}
                    />
                  </div>
                  <div className={classes.sm_img}>
                    <img
                      src={product[0].listImg[1]}
                      alt={product.title}
                      onClick={() => setIndex(1)}
                    />
                  </div>
                  <div className={classes.sm_img}>
                    <img
                      src={product[0].listImg[2]}
                      alt={product.title}
                      onClick={() => setIndex(2)}
                    />
                  </div>
                  <div className={classes.sm_img}>
                    <img
                      src={product[0].listImg[3]}
                      alt={product.title}
                      onClick={() => setIndex(3)}
                    />
                  </div>
                </div>
              </div>
              <div className={classes.product_info}>
                <h1 className={classes.product_title}>{product[0].title}</h1>
                <p className={classes.product_brand}>{product[0].brand}</p>
                <div className={classes.specifications}>
                  <p className={classes.spec}>
                    Displey Size Class: ..........................
                    <span className={classes.black}>55 inches</span>
                  </p>
                  <p className={classes.spec}>
                    Resolution: ......................................
                    <span className={classes.black}>4K UHD</span>
                  </p>
                  <p className={classes.spec}>
                    Pixels: ...............................................
                    <span className={classes.black}>3840 x 2160</span>
                  </p>
                  <p className={classes.spec}>
                    OS: .....................................................
                    <span className={classes.black}>Android 9.0</span>
                  </p>
                </div>
                <p className={classes.description}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minus, excepturi autem accusantium iusto officiis labore
                  repellendus adipisci modi alias.
                </p>
              </div>
            </div>
            <div className={classes.checkout}>
              <div className={classes.checkout_wrapper}>
                <h3 className={classes.price}>${product[0].price}</h3>
                <div className={classes.follow_price}>
                  <RemoveRedEyeOutlinedIcon
                    className={classes.follow_price_icon}
                  />
                  Follow price
                </div>
                <div className={classes.protection}>
                  <LockOutlinedIcon className={classes.protection_icon} />
                  Price protection
                </div>
                <div className={classes.btns}>
                  <button
                    className={classes.add_to_cart_btn}
                    onClick={() => addItemToCartHandler(product[0].id)}>
                    <LocalMallOutlinedIcon />
                  </button>
                  <button className={classes.buy_now_btn}>Buy Now</button>
                </div>
              </div>
            </div>
          </>
        )}
      </Card>
      {/* /////////////////////////////////// */}
      {isModalOpen && (
        <div className={classes.modal_backdrop} onClick={closeModal}>
          <div className={classes.modal_wrapper} onClick={handleClick}>
            <div className={classes.product_modal_imgs}>
              <div className={classes.main_modal_img}>
                {product.length > 0 && (
                  <img
                    src={product[0].listImg[modalIndex]}
                    alt={product.title}
                  />
                )}
              </div>
              <div className={classes.small_modal_imgs}>
                <div className={classes.sm_modal_img}>
                  {product.length > 0 && (
                    <img
                      src={product[0].listImg[0]}
                      alt={product.title}
                      onClick={() => setModalIndex(0)}
                    />
                  )}
                </div>
                <div className={classes.sm_modal_img}>
                  {product.length > 0 && (
                    <img
                      src={product[0].listImg[1]}
                      alt={product.title}
                      onClick={() => setModalIndex(1)}
                    />
                  )}
                </div>
                <div className={classes.sm_modal_img}>
                  {product.length > 0 && (
                    <img
                      src={product[0].listImg[2]}
                      alt={product.title}
                      onClick={() => setModalIndex(2)}
                    />
                  )}
                </div>
                <div className={classes.sm_modal_img}>
                  {product.length > 0 && (
                    <img
                      src={product[0].listImg[3]}
                      alt={product.title}
                      onClick={() => setModalIndex(3)}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProductDetails;
