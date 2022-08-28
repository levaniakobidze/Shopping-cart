import React from "react";
import classes from "./Cookies.module.css";
function Cookies({ setShowCookies }) {
  const closeCookiesHandler = () => {
    setShowCookies(false);
  };

  return (
    <div className={classes.cookies}>
      <button className={classes.close_cookies} onClick={closeCookiesHandler}>
        x
      </button>
      <h3 className={classes.cookies_title}>Cookie Policy</h3>
      <div className={classes.text_and_btn}>
        <p className={classes.cookies_text}>
          Cookies help us deliver our services. By using our services, you agree
          to our use of cookies. For more details please see user agreement.{" "}
        </p>
        <button className={classes.ok_btn} onClick={closeCookiesHandler}>
          Ok
        </button>
      </div>
    </div>
  );
}

export default Cookies;
