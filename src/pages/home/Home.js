import React from "react";
import Card from "../../components/Card/Card";
import classes from "./Home.module.css";
import HomeSwiper from "../../components/HomeSwiper/HomeSwiper";
import { laptopsList } from "../../cartItems";
import Product from "../../components/product/Product";
import TopOffers from "../../components/HomeComponents/TopOffers/TopOffers";

function Home() {
  return (
    <section className={classes.home}>
      <Card>
        <div className={classes.home_main_img}>
          <HomeSwiper />
          {/* ////////////////// */}
          <div className={classes.top_offers}>
            <h1 className={classes.top_offers_header}>Top offers</h1>
            <div className={classes.top_offers_list_cont}>
              <TopOffers />
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}

export default Home;
