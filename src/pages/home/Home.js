import React from "react";
import Card from "../../components/Card/Card";
import classes from "./Home.module.css";
import HomeSwiper from "../../components/HomeSwiper/HomeSwiper";
function Home() {
  return (
    <section className={classes.home}>
      <Card>
        <div className={classes.home_main_img}>
          <HomeSwiper />
        </div>
      </Card>
    </section>
  );
}

export default Home;
