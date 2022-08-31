import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { images } from "./homeImgs";
import classes from "./HomeSwiper.module.css";
SwiperCore.use([Autoplay, Navigation, Pagination]);

function HomeSwiper() {
  const navPrevRef = useRef(null);
  const navNextRef = useRef(null);
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      modules={[Autoplay, Navigation, Pagination]}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      centeredSlides
      pagination={{ clickable: true }}
      navigation={{
        clickable: true,
        prevEl: navPrevRef.current,
        nextEl: navNextRef.current,
      }}>
      <SwiperSlide>
        <img src={images[0]} alt='' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={images[1]} alt='' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={images[2]} alt='' />
      </SwiperSlide>
      <div className={classes.img_btns}>
        <button ref={navPrevRef} className={classes.prev}>
          {"<"}
        </button>
        <button ref={navNextRef} className={classes.next}>
          {">"}
        </button>
      </div>
    </Swiper>
  );
}

export default HomeSwiper;
