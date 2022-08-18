import React, { useEffect, useRef } from "react";
import classes from "./Filter.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import {
  filterWithSearch,
  filterBrands,
  filterPrice,
  restart,
} from "../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import ReplayIcon from "@mui/icons-material/Replay";

function Filter(props) {
  const [active, setActive] = useState(true);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.initialItems);
  const priceFromRef = useRef(null);
  const priceToRef = useRef(null);
  // const [brands, setBrands] = useState([]);
  let brands = [];

  const handleInputChange = (e) => {
    dispatch(filterWithSearch(e.target.value));
  };

  const searchBrandsHandler = (e) => {
    dispatch(filterBrands(e.target.innerText));
  };

  const filterPriceHandler = (e) => {
    e.preventDefault();
    dispatch(
      filterPrice({
        from: priceFromRef.current.value,
        to: priceToRef.current.value,
      })
    );
  };
  const restartHandler = () => {
    priceFromRef.current.value = "";
    priceToRef.current.value = "";
    dispatch(restart());
  };

  if (items.length > 0) {
    items.map((item) => {
      if (!brands.includes(item.brand)) {
        brands = [...brands, item.brand];
      }
    });
  }

  return (
    <section
      className={
        active ? classes.filter : `${classes.Filter} ${classes.filter_close}`
      }>
      <div className={classes.title_and_burger}>
        <div className={classes.burger_icon_cont}>
          <MenuIcon
            className={classes.burger_icon}
            onClick={() => setActive(!active)}
          />
        </div>
        <h4 className={classes.title}>{""}</h4>
      </div>
      {/* ////////////////////////////////// */}

      <div
        className={
          active ? classes.filters_wrapper : classes.filters_wrapper_hide
        }>
        <div className={classes.search_filter}>
          <input
            type='text'
            placeholder='Search...'
            onChange={handleInputChange}
          />
        </div>

        <div className={classes.filter_brands}>
          <h4 className={classes.filter_brands_title}>Brands</h4>
          <ul className={classes.brands_list} onClick={searchBrandsHandler}>
            <li>All</li>
            {brands &&
              brands.map((name, i) => {
                return <li key={i}>{name}</li>;
              })}
          </ul>
        </div>
        <div className={classes.filter_price}>
          <h4 className={classes.filter_price_title}>Price</h4>

          {/* ///////////////////////////////////////// */}
          <form
            className={classes.price_filter_inputs}
            onSubmit={filterPriceHandler}>
            <input
              className={active ? classes.price_from : classes.price_from_hide}
              type='text'
              placeholder='from...'
              ref={priceFromRef}
              required
            />
            <input
              className={active ? classes.price_to : classes.price_to_hide}
              type='text'
              placeholder='to...'
              ref={priceToRef}
              required
            />
            <button type='submit' className={classes.ok_btn}>
              OK
            </button>
            <span className={classes.restart_btn} onClick={restartHandler}>
              <ReplayIcon className={classes.restart_icon} />
            </span>
          </form>
          {/* ///////////////////////////////////////// */}
        </div>
      </div>
    </section>
  );
}

export default Filter;
