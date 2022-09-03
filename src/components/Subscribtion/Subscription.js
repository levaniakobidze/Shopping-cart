import React from "react";
import classes from "./Subscription.module.css";
import Card from "../Card/Card";
import SendIcon from "@mui/icons-material/Send";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
const submitHandler = (e) => {
  e.preventDefault();
};

const Subscription = () => {
  return (
    <div className={classes.subscribtion_cont}>
      <Card className={classes.subscribtion_card}>
        <form
          action='#'
          onSubmit={submitHandler}
          className={classes.subscribe_form}>
          <input type='email' placeholder='Enter your email ' />
          <button>
            <SendIcon />
          </button>
        </form>
        {/* /////////////////// */}

        <div className={classes.links_cont}>
          <div className={classes.links}>
            <a
              href='https://github.com/levaniakobidze'
              className={classes.link}>
              <GitHubIcon className={classes.link_icon} />
            </a>
            <a
              href='https://www.linkedin.com/in/levan-iakobidze-b0b60923b/'
              className={classes.link}
              style={{ marginLeft: "5px" }}>
              <LinkedInIcon className={classes.link_icon} />
            </a>
          </div>
          <div className={classes.creator_cont}>
            <PersonOutlinedIcon className={classes.creator_icon} />

            <div className={classes.creator_text}>
              <span className={classes.coded_and_designed}>
                Coded and Designed by:
              </span>
              <a href='https://www.linkedin.com/in/levan-iakobidze-b0b60923b/'>
                Levan iakobidze
                <img src='https://zoommer.ge/images/flags/ge.png' alt='flag' />
              </a>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Subscription;
