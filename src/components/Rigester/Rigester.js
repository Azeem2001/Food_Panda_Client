import React from 'react'
import CreateAccount from '../Email/CreateAccount'
import Email from '../Email/Email'
import Validation from '../Email/Validation'
import style from "./Register.module.scss"

const Rigester = () => {
  return (
    <div className={style.Rigester_container}>
       {/* <Email/> */}
       {/* <Validation/> */}
       <CreateAccount/>
    </div>
  )
}

export default Rigester