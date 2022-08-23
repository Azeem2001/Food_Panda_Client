import React from 'react'
import style from "./Email.module.scss"
import { Button, TextField ,StyledEngineProvider,FormControl,InputLabel,Input,InputAdornment, IconButton, } from "@mui/material";
const CreateAccount = () => {
    const panda = "./images/create_acount.png"
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
    
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
    
  return (
    <div className={style.Email_container}>
    <div className={style.Input}>
      <img src={panda} alt="" />
      <h1>Let's get you started!</h1>
      <h4>First, create your account    </h4>
      <TextField
        className={style.text_input}
        fullWidth
        id="outlined-filled"
        label="Email"
        variant="outlined"
      />
      <div className={style.name}>
       <TextField
        id="outlined-name"
        label="First Name" 
      />
      <TextField
        id="outlined-uncontrolled"
        label="Last Name"
      />
    </div>
    <div className={style.password}>
    <FormControl sx={{ mt: 3, width: '100%' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? "Hide" : "Show"}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
    </div>
      <Button variant="outlined" fullWidth className={style.login_btn}>
        Create Account
      </Button>
    </div>
  </div>
  )
}

export default CreateAccount