import { Grid } from "@mui/material";
import React from "react";
import style from "./Pocket.module.scss";
const Pocket = () => {
  const appGellery = "/images/app_gellery.png";
  const appStore = "/images/Google+Play+Store+Icon.png";
  const mobileImg = "/images/home-foodpanda-apps.png";
  return (
    <div className={style.Pocket_container}>
      <div className={style.heading}>
        <p>Put Us on Your Pocket</p>
      </div>
      <div className={style.Pocket_item}>
        <div className={style.content}>
          <Grid container>
            <Grid item xs={12} md={6}>
              <h2>Download the food and groceries you love</h2>
              <p>
                It's all at your fingertips – the restaurants and shops you
                love. Find the right food and groceries to suit your mood, and
                make the first bite last. Go ahead, download us.
              </p>
              <div className={style.content_img}>
                <img src={appGellery} alt="mobileImg" />
                <img src={appStore} alt="mobileImg" />
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={style.image}>
                <img src={mobileImg} alt="mobileImg" />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Pocket;
