import React from "react";
import classes from "./ProductsList.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemsList, calculate } from "../../redux/slices/cartSlice";
import listItems from "../../cartItems";
import Product from "../../components/product/Product";
import Filter from "../../components/filter/Filter";
import Card from "../../components/Card/Card";

function ProductsList() {
  const dispatch = useDispatch();
  const lstItems = useSelector((state) => state.cart.listItems);
  const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    dispatch(addItemsList(listItems));
  }, []);

  return (
    <section className={classes.productListing}>
      <Card className={classes.productListing_card}>
        <Filter />
        <div className={classes.list_wrapper}>
          {listItems &&
            listItems.map((item) => {
              return <Product key={item.id} {...item} />;
            })}
        </div>
      </Card>
    </section>
  );
}

export default ProductsList;
