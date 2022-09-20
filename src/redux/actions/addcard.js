import { Types } from "../Types";

export const AddItems = (list, Card) => (dispatch) => {
  let reMakeCart = [...Card];
  let getItem = reMakeCart.find((item) => item?.title === list?.title);
  if (getItem?.num) {
    list.num += 1;
  } else {
    list.num = 1;
  }

  if (!getItem) {
    reMakeCart.push(list);
  }
  dispatch({ type: Types.ADD, payload: reMakeCart });
};

export const RemoveItem = (items, addcart, index) => (dispatch) => {
  let CopyCart = [...addcart];
  if(CopyCart[index].num === 0){
   return CopyCart
  }else{
    CopyCart[index].num = CopyCart[index].num - 1;

  }

  dispatch({ type: Types.REMOVER, payload: CopyCart });
};
