import React,{useState} from "react";
import CreateAccount from "../../components/Email/CreateAccount";
import Email from "../../components/Email/Email";
import Validation from "../../components/Email/Validation";
import style from "./Register.module.scss";

const Rigester = () => {
const [rigester, setRigester] = useState("email")
  return (
    <div className={style.Rigester_container}>
      
      {rigester === "email" ? <Email setRigester={setRigester}/> : null }
      {rigester === "validation" ? <Validation setRigester={setRigester}/> : null }
      {rigester === "account" ? <CreateAccount setRigester={setRigester} /> : null }
     

    </div>
  );
};

export default Rigester;
