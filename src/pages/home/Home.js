import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import classes from "./Home.module.css";
import { images } from "./homeImgs";

function Home() {
  const [imgIndex, setImgIndex] = useState(0);

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
          <img src={images[imgIndex]} alt='' />
          <div className={classes.img_btns}>
            <button onClick={decrementImgIndex}>{"<"}</button>
            <button onClick={incrementImgIndex}>{">"}</button>
          </div>
        </div>
      </Card>
    </section>
  );
}

export default Home;
