import React from "react";
import style from "./Email.module.scss";
import { Button, TextField ,StyledEngineProvider } from "@mui/material";
const Validation = () => {
  const email = "./images/email_Icon.png";
  return (
    <div className={style.Email_container}>
      <div className={style.Input}>
        <img src={email} alt="" />
        <h1>What's your email?</h1>
        <h4>We'll check if you have an account</h4>
        <TextField
          className={style.text_input}
          fullWidth
          id="outlined-filled"
          label="Email"
          variant="outlined"
        />
        <Button variant="outlined" fullWidth className={style.login_btn}>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default Validation;
