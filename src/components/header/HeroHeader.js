import React from "react";
import style from "./hero.module.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const HeroHeader = () => {
  const image = "./images/hero-home-pk.webp.png";
  return (
    <div className={style.HeroHeader_container}>
      <div className={style.content_section}>
        <p>It's the food and groceries you love, delivered</p>
        <div className={style.input_section}>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            fullWidth
          />
          <Button className={style.btn}>Delivery</Button>
          <span className={style.center}>Or</span>
          <Button className={style.btn}>Pickup</Button>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
