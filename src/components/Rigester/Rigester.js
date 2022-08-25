import React from "react";
import CreateAccount from "../Email/CreateAccount";
import Email from "../Email/Email";
import Validation from "../Email/Validation";
import style from "./Register.module.scss";
import Login from "../Email/Login";
const Rigester = () => {
  return (
    <div className={style.Rigester_container}>
      {/* <Email /> */}
      {/* <Validation/> */}
      {/* <CreateAccount /> */}
      <Login />
    </div>
  );
};

export default Rigester;
