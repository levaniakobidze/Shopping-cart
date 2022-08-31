import React, { useEffect, useRef, useState } from "react";
import Card from "../../components/Card/Card";
import classes from "./Home.module.css";
import { images } from "./homeImgs";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
SwiperCore.use([Autoplay, Navigation]);
function Home() {
  const [imgIndex, setImgIndex] = useState(0);
  const navPrevRef = useRef(null);
  const navNextRef = useRef(null);

  const incrementImgIndex = () => {
    if (imgIndex > images.length - 2) {
      setImgIndex(0);
      return;
    }
    setImgIndex(imgIndex + 1);
    console.log(imgIndex);
  };
  const decrementImgIndex = () => {
    if (imgIndex <= 0) {
      setImgIndex(images.length - 1);
      return;
    }
    setImgIndex(imgIndex - 1);
    console.log(imgIndex);
  };

  useEffect(() => {
    const updateIndex = setInterval(() => {
      if (imgIndex > images.length - 2) {
        setImgIndex(0);
        return;
      }
      setImgIndex(() => imgIndex + 1);
      console.log(imgIndex);
    }, 4000);

    return () => {
      clearInterval(updateIndex);
    };
  }, [imgIndex]);

  return (
    <section className={classes.home}>
      <Card>
        <div className={classes.home_main_img}>
          {/* <img src={images[imgIndex]} alt='' />
          <div className={classes.img_btns}>
            <button onClick={decrementImgIndex}>{"<"}</button>
            <button onClick={incrementImgIndex}>{">"}</button>
          </div> */}
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            modules={[Autoplay, Navigation]}
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
        </div>
      </Card>
    </section>
  );
}

export default Home;
