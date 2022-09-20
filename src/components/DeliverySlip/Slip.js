import React from 'react'
import { useSelector } from 'react-redux'
import { AddItems } from '../../redux/actions/addcard';
import style from "./Slip.module.scss"

const Slip = () => {
   
    let list = useSelector((state) => state?.addCart?.cart);
      
      let totalprice = () => {
        let remakeArray = [...list];
        let resultedNum = 0;
        let getItem = remakeArray.filter((item) => {
          let multiplyPrice = Number(item.price) * item.num;
          resultedNum += multiplyPrice;
        });
        return resultedNum;
      };
      
    return (
    <div className={style.SlipContainer}>
     
            <div className={style.SlipItem}>
            <h3>Your order from TCF - Flood Relief</h3>
       
            {list.map((item ,index)=>(
             <>
            
        <p>{item?.num} x  Donation - {item?.price}   <span> PKR {Number(item?.price) * item?.num +  ".00"}</span></p>
        <hr /> 
        </> 
 ))}
            
               <div className={style.slipPrice}>
              <div>
                  <p>Subtotal</p>
                  <p>Delivery Fee</p>
                  <h3>Total<span>{"(incl.GST)"}</span></h3>
              </div>
              <div>
                  <p>PKR {totalprice()}.00</p>
                   {(totalprice() === 0) ? <p>PKR 00.00</p> : <p>PKR 50.00</p>}
                  <h3>PKR {(totalprice() === 0) ? " 00" : (totalprice() + 50)}.00</h3>
              </div>
          </div>
              
            </div>
     
    </div>
  )
}

export default Slip