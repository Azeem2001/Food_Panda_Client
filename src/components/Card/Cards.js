import React from 'react'
import style from "./Card.module.scss"
import {Switch,Button} from '@mui/material'
const Card = () => {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  return (
   <div className={style.card_container}>
         <div className={style.items}>
              <span>Delivery</span> 
              <span className={style.toggleButton}><Switch {...label} defaultChecked /></span>
              <span>Pick-Up</span>
              <h3>Your Cart</h3>
              <h2>Start adding items to your cart</h2>
              <hr />
              <div className={style.item_price}>
                 <div className={style.marginTop}>
                  <p className={style.padding}>Subtotal</p>
                  <h3>Total{"(Incl.GST)"}</h3>
                 </div>
                 <div>
                  <p>Rs.0</p>
                  <h3>Rs.0</h3>
                 </div>
              </div>
              <Button variant='outlined' >Go to checkout</Button>
         </div>
   </div>  
  
  )
}

export default Card