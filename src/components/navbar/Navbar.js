import React from "react";
import style from "./navbar.module.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const logo = "./images/cropped-foodpanda-favicon.png";
  let navigate = useNavigate()
  return (
    <>
      <div className={style.navbar_container}>
        <div className={style.fixed_container}>
          <div className={style.logo_section}>
            <img src={logo} alt="foopanda logo" />
            <span>foodpanda</span>
          </div>
          <div className={style.icon_section}>
            <AccountCircleIcon />
              <Button
              onClick={() => navigate("/rigester")}
              variant="contained"
            >
              Login
            </Button>
            <CardGiftcardIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
