import React, { useRef } from "react";
import classes from "./Product.module.css";
import { addItemToCart } from "../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { images } from "../HomeSwiper/homeImgs";
SwiperCore.use([Autoplay, Navigation]);

function Product({ id, amount, img, listImg, title, price }) {
  const filterActive = useSelector((state) => state.cart.filterActive);

  const dispatch = useDispatch();
  const addToCartHandler = (id) => {
    dispatch(addItemToCart(id));
  };
  const navPrevRef = useRef(null);
  const navNextRef = useRef(null);

  return (
    <div
      className={
        filterActive
          ? classes.product_wrapper
          : `${classes.product_wrapper} ${classes.active}`
      }>
      <div className={classes.img_btns}>
        <button ref={navPrevRef} className={classes.prev}>
          {"<"}
        </button>
        <button ref={navNextRef} className={classes.next}>
          {">"}
        </button>
      </div>
      <Link to={`/details/${id}`} className={classes.product}>
        <div className={classes.product_img}>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            modules={[Autoplay, Navigation]}
            centeredSlides
            pagination={{ clickable: true }}
            navigation={{
              clickable: true,
              prevEl: navPrevRef.current,
              nextEl: navNextRef.current,
            }}>
            <SwiperSlide>
              <img src={listImg[0]} alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={listImg[1]} alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={listImg[2]} alt='' />
            </SwiperSlide>
          </Swiper>
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
