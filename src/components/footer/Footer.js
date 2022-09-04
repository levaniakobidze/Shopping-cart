import React from "react";
import Card from "../Card/Card";
import Subscription from "../Subscribtion/Subscription";
import classes from "./Footer.module.css";
import EmailIcon from "@mui/icons-material/Email";
import { Phone } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Subscription />

      <Card className={classes.footer_card}>
        <div className={classes.footer_links_and_map_cont}>
          <div className={classes.footer_links_wrapper}>
            <div className={classes.only_links_wrapper}>
              <div className={classes.footer_link_card}>
                {" "}
                <span></span>
                <div className={classes.links_wrapper}>
                  <h4>Navigation</h4>
                  <div className={classes.links}>
                    <a href='#'>About us</a>
                    <a href='#'>Vacancy</a>
                    <a href='#'>Menu</a>
                  </div>
                </div>
              </div>
              {/* ////////// */}
              <div className={classes.footer_link_card}>
                {" "}
                <span></span>
                <div className={classes.links_wrapper}>
                  <h4>Payments</h4>
                  <div className={classes.links}>
                    <a href='#'>Payment methods</a>
                    <a href='#'>Warranty</a>
                    <a href='#'>Installment</a>
                  </div>
                </div>
              </div>
              {/* //////////// */}
              <div className={classes.footer_link_card}>
                {" "}
                <span></span>
                <div className={classes.links_wrapper}>
                  <h4>Account</h4>
                  <div className={classes.links}>
                    <a href='#'>Online</a>
                    <a href='#'>Return Item</a>
                    <a href='#'>Conditions of use</a>
                  </div>
                </div>
              </div>
              {/* //////////////////////// */}
              <div className={classes.footer_link_card}>
                {" "}
                <span></span>
                <div className={classes.links_wrapper}>
                  <h4>Navigation</h4>
                  <div className={classes.links}>
                    <a href='#'>About us</a>
                    <a href='#'>Vacancy</a>
                    <a href='#'>Menu</a>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.contact}>
              <div className={classes.email_cont}>
                <EmailIcon className={classes.email_icon} />
                <span className={classes.email}>
                  levaniakobidze25@gmail.com
                </span>
              </div>
              <div className={classes.phone_cont}>
                <Phone className={classes.phone_icon} />
                <span className={classes.phone}>599 99 99 99</span>
              </div>
            </div>
          </div>
          <div className={classes.map_cont}>
            {/* /////////////////////////// */}
            <iframe
              width='320'
              height='213'
              id='gmap_canvas'
              src='https://maps.google.com/maps?q=georgia&t=&z=7&ie=UTF8&iwloc=&output=embed'
              frameborder='0'
              scrolling='no'
              marginheight='0'
              marginwidth='0'></iframe>

            {/* ////////////////////////// */}
          </div>
        </div>
      </Card>

      <div className={classes.footer_bottom}>
        <p>Copyright © 2022 Levan iakobidze. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
