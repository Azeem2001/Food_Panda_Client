import { combineReducers } from "redux";
import auth from "./auth";
import resturant from "./resturant"
import addCart from "./addcard";
import alert from "./alert";
export default combineReducers({
  auth,
  resturant,
  addCart,
  alert,
});
