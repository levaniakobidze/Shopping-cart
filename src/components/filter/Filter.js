import React, { useEffect } from "react";
import classes from "./Filter.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { filterWithSearch } from "../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function Filter() {
  const [active, setActive] = useState(true);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cart);

  const handleInputChange = (e) => {
    dispatch(filterWithSearch(e.target.value));
    console.log(state);
  };

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
      </div>
    </section>
  );
}

export default Filter;
