import React, { useRef } from "react";
import Card from "../../components/Card/Card";
import classes from "./Home.module.css";
import HomeSwiper from "../../components/HomeSwiper/HomeSwiper";
import { laptopsList, tvList } from "../../cartItems";
import TopOffers from "../../components/HomeComponents/TopOffers/TopOffers";
import styles from "../../components/HomeComponents/TopOffers/TopOffers.module.css";

function Home() {
  const navPrevRef = useRef(null);
  const navNextRef = useRef(null);
  return (
    <section className={classes.home}>
      <Card>
        <div className={classes.home_main_img}>
          <HomeSwiper />
          {/* ////////////////// */}
          <div className={classes.top_offers}>
            <div className={classes.top_cont}>
              <h1 className={classes.top_offers_header}>Top Tv</h1>
              <div className={styles.img_btns}>
                <button ref={navPrevRef} className={styles.prev}>
                  {"<"}
                </button>
                <button ref={navNextRef} className={styles.next}>
                  {">"}
                </button>
              </div>
            </div>
            <div className={classes.top_offers_list_cont}>
              <TopOffers list={tvList} />
            </div>
          </div>
          <div className={classes.banner_img}>
            <img src={require("./bannershop.jpg")} alt="" />
          </div>
          {/* ////////////////// */}
          <div className={classes.top_offers}>
            <div className={classes.top_cont}>
              <h1 className={classes.top_offers_header}>Top Laptop</h1>
              <div className={styles.img_btns}>
                <button ref={navPrevRef} className={styles.prev}>
                  {"<"}
                </button>
                <button ref={navNextRef} className={styles.next}>
                  {">"}
                </button>
              </div>
            </div>

            <div className={classes.top_offers_list_cont}>
              <TopOffers list={laptopsList} />
            </div>
          </div>
          <img
            className={classes.bn}
            src={require("./bannershop1.avif")}
            alt=""
          />
        </div>
      </Card>
    </section>
  );
}

export default Home;
