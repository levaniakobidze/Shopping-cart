import React, { useEffect } from "react";
import classes from "./ProductsList.module.css";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../components/product/Product";
import Filter from "../../components/filter/Filter";
import Card from "../../components/Card/Card";
import { addItemsList } from "../../redux/slices/cartSlice";
import { phonesList } from "../../cartItems";
import { images } from "../home/homeImgs";

function ProductsList() {
  const items = useSelector((state) => state.cart.listItems);
  const filterActive = useSelector((state) => state.cart.filterActive);

  const dispatch = useDispatch();

  useEffect(() => {
    if (items.length < 1) {
      dispatch(addItemsList(phonesList));
    }
  }, []);

  return (
    <section className={classes.productListing}>
      <Card className={classes.productListing_card}>
        <Filter />
        <div className={classes.list_wrapper}>
          <div className={classes.banner}>
            <img src={images[1]} alt='' className={classes.img1} />
            <img
              src={images[0]}
              alt=''
              className={!filterActive ? classes.img2 : classes.none}
            />
            <img src={images[1]} alt='' className={classes.img2} />
          </div>
          {items &&
            items.map((item) => {
              return <Product key={item.id} {...item} />;
            })}
        </div>
      </Card>
    </section>
  );
}

export default ProductsList;
