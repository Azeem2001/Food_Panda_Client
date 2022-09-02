import React from 'react'
import style from "./Footer.module.scss"
const Footer = () => {
  const logo = "/images/cropped-foodpanda-favicon.png"
  return (
    <div className={style.Footer_container}>
                <hr />
            <div>
                <img src={logo} alt="logo" />
                <h1>Food Panda</h1>
            </div>
            <hr />
        
     </div>
  )
}

export default Footer