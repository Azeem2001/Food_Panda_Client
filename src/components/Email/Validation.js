import React, { useState } from "react";
import style from "./Email.module.scss";
import {
  Button,
  TextField,
  StyledEngineProvider,
  CircularProgress,
} from "@mui/material";
import { checkEmail } from "../../redux/actions/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Validation = ({ setRigester }) => {
  const Email = "./images/email_Icon.png";
  let [loading, setLoading] = useState(false);
  let [email, setEmail] = useState("");
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const emailcheck = () => {
    dispatch(checkEmail({ email }, setLoading, navigate, setRigester));
  };
  return (
    <div className={style.Email_container}>
      <div className={style.Input}>
        <img src={Email} alt="" />
        <h1>What's your email?</h1>
        <h4>We'll check if you have an account</h4>
        <TextField
          className={style.text_input}
          fullWidth
          id="outlined-filled"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {loading ? (
          <CircularProgress color="secondary" />
        ) : (
          <Button
            onClick={emailcheck}
            variant="outlined"
            fullWidth
            className={style.login_btn}
          >
            Continue
          </Button>
        )}
      </div>
    </div>
  );
};

export default Validation;
