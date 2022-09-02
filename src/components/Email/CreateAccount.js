import React, { useState } from "react";
import style from "./Email.module.scss";
import {
  Button,
  TextField,
  StyledEngineProvider,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { userRegister } from "../../redux/actions/auth";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const panda = "/images/create_acount.png";
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  let [email, setEmail] = useState("");
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");
  let [loading, setLoading] = useState(false);
   
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const register = () => {
    let data = {
      email,
      name,
      password,
    };

    dispatch(userRegister(data, setEmail, setName, setPassword, navigate,setLoading));
  };

  return (
    <div className={style.Email_container}>
      <div className={style.Input}>
        <img src={panda} alt="" />
        <h1>Let's get you started!</h1>
        <h4>First, create your account </h4>
        <TextField
          className={style.text_input}
          fullWidth
          id="outlined-filled"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className={style.name}>
          <TextField
            id="outlined-uncontrolled"
            label="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
        </div>
        <div className={style.password}>
          <FormControl sx={{ mt: 3, width: "100%" }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    <small> {values.showPassword ? "Hide" : "Show"}</small>
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <div className={style.requirement}>
            <p>Password strength</p>
            <hr />
            <p>Password must contain</p>
            <ul>
              <li>At least 6 characters</li>
              <li>At least one Upppercase letter{"(A-Z)"}</li>
              <li>At least one lowercase letter{"(A-Z)"}</li>
              <li>At least one number{"(0-9)"}</li>
            </ul>
          </div>
        </div>

        {loading ? (
          <CircularProgress color="secondary" />
        ) : (
          <Button
            variant="outlined"
            fullWidth
            className={style.login_btn}
            onClick={register}
          >
            Create Account
          </Button>
        )}
      </div>
    </div>
  );
};

export default CreateAccount;
