import { Types } from "../Types";
import { useSelector } from "react-redux";

export const AddItems = (list) =>  (dispatch) => {
  dispatch({ type: Types.ADD, payload:list });
;
 console.log(list)
   
  };