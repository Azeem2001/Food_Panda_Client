import React from "react";
import style from "./Card.module.scss";
import { Switch, Button } from "@mui/material";
import { useDispatch, useSelector,  } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RemoveIcon from '@mui/icons-material/Remove';
import { RemoveItem } from "../../redux/actions/addcard";
// import { AddCard } from '@mui/icons-material';

const Card = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  let addcart = useSelector((state) => state?.addCart?.cart);
  let navigate = useNavigate()
  let dispatch = useDispatch()
  let totalprice = () => {
    let remakeArray = [...addcart];
    let resultedNum = 0;
    let getItem = remakeArray.filter((item) => {
      let multiplyPrice = Number(item.price) * item.num;
      resultedNum += multiplyPrice;
    });
    return resultedNum;
  };
   let removeItem = (items,index)=>{
    dispatch(RemoveItem(items,addcart,index ))

   }
  return (
    <div className={style.card_container}>
      <div className={style.items}>
        <span>Delivery</span>
        <span className={style.toggleButton}>
          <Switch {...label} defaultChecked />
        </span>
        <span>Pick-Up</span>
        <h3>Your Cart</h3>
        <h2>Start adding items to your cart</h2>
        <hr />

        {addcart?.map((items, index) => {
          return (
            <div className={style.item_price} key={index}>
              <div className={style.marginTop}>
                <p
                  className={style.padding}
                >{`price ${addcart[index].title}`}</p>
                
                 <span>Quantity</span> 
                
              </div>
              <button className={style.removeItem} onClick={()=> removeItem(items , index)}  >
                      <RemoveIcon />
                   </button>
              <div>
                <p className={style.padding}>{`${items.price}`}</p>
                <span>{items.num}</span>
               
              </div>
            </div>
          );
        })}
        <div className={style.totalAmount}>
          <h3>Total</h3>
          <h3>{totalprice()}</h3>
        </div>
        <Button variant="outlined" onClick={()=> navigate("/delivery")}>Go to checkout</Button>
      </div>
    </div>
  );
};

export default Card;
