import React, { useEffect } from "react";
import classes from "./ProductsList.module.css";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../components/product/Product";
import Filter from "../../components/filter/Filter";
import Card from "../../components/Card/Card";
import { addItemsList } from "../../redux/slices/cartSlice";
import { phonesList } from "../../cartItems";

function ProductsList() {
  const items = useSelector((state) => state.cart.listItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addItemsList(phonesList));
  }, []);

  return (
    <section className={classes.productListing}>
      <Card className={classes.productListing_card}>
        <Filter
          item1={"Samsung"}
          item2={"Apple"}
          item3={"Google"}
          item4={"Xiaomi"}
        />
        <div className={classes.list_wrapper}>
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
