import React from "react";
import Card from "../Card/Card";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

function Navbar() {
  const { amount } = useSelector((state) => state.cart);

  return (
    <nav className={classes.navbar}>
      <Card className={classes.navbar_card}>
        <Link to='/' className={classes.logo}>
          <span className={classes.logo_item}></span>
          SomeOOn
        </Link>
        <Link to='/cart' className={classes.cart}>
          <LocalMallOutlinedIcon className={classes.cart_logo} />
          <span className={classes.amount}>{amount}</span>
        </Link>
      </Card>
    </nav>
  );
}

export default Navbar;
