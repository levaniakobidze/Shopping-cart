import React, { useEffect, useState } from "react";
import classes from "./ProductDetails.module.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../components/Card/Card";

function ProductDetails() {
  const [product, setProduct] = useState([]);
  const [index, setIndex] = useState(0);
  const [modalIndex, setModalIndex] = useState(index);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const items = useSelector((state) => state.cart.listItems);
  const params = useParams();

  useEffect(() => {
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
            <div className={classes.checkout}></div>
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
