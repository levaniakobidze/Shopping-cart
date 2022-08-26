import React, { useState } from "react";
import classes from "./SlideUp.module.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function SlideUp() {
  const [slideUp, setSlideUp] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY >= 160) {
      setSlideUp(true);
    } else {
      setSlideUp(false);
    }
  };

  window.addEventListener("scroll", scrollHandler);
  return (
    <a
      href='#navbar'
      className={!slideUp ? classes.slide_up : classes.slide_up_active}>
      <KeyboardArrowUpIcon />
    </a>
  );
}

export default SlideUp;
