import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import Product from "../../product/Product";
SwiperCore.use([Autoplay, Navigation, Pagination]);

function TopOffers({ list }) {
  const navPrevRef = useRef(null);
  const navNextRef = useRef(null);
  return (
    <Swiper
      spaceBetween={1}
      slidesPerView={2}
      breakpoints={{
        600: {
          // width: 576,
          slidesPerView: 2,
        },
        614: {
          // width: 768,
          slidesPerView: 3,
          spaceBetween: 30,
        },
        900: {
          slidesPerView: 4,
        },
        1100: {
          slidesPerView: 5,
        },
        1300: {
          spaceBetween: 1,
          slidesPerView: 6,
        },
      }}
      loop={true}
      // modules={[Autoplay, Navigation, Pagination]}
      // stopClicksPropagation={false}
      autoplay={{
        delay: 2000,
        disableOnInteraction: true,
      }}
      centeredSlides
      navigation={{
        clickable: true,
        prevEl: navPrevRef.current,
        nextEl: navNextRef.current,
      }}
    >
      {list.map((item) => {
        return (
          <SwiperSlide>
            <Product key={item.id} {...item} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default TopOffers;
