import { Button } from '@mui/material'
import Stack from '@mui/material/Stack';

import React from 'react'
import style from "./Email.module.scss"
const Email = () => {
  return (
    <div className={style.Email_container}>
        <div className={style.Input}>
         <h1>Welcome!</h1>
         <h4>Sign Up Or login to Continue</h4>   
       <Button variant='outlined' fullWidth className={style.btn}>Continue with Email</Button>
       <p>By signing up, you agree to our <span>Terms and Conditions</span> and <span>Privacy Policy.</span></p> 
    </div>
    </div>
  )
}

export default Email