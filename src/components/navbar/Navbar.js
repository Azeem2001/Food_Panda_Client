import React from 'react'
import style from "./navbar.module.scss"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
const Navbar = () => {
  const logo = "./images/cropped-foodpanda-favicon.png"
  return (
    <>
    <div className={style.navbar_container}>
      <div className={style.fixed_container}>
       <div className={style.logo_section}>
        <img src={logo} alt="foopanda logo" />
        <span>foodpanda</span>
       </div>
       <div className={style.icon_section}>
       <AccountCircleIcon/>
       <span>Login</span>
      <CardGiftcardIcon/>
       </div>
       </div>
    </div>
    </>
  )
}

export default Navbar