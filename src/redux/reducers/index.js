import { combineReducers } from "redux";
import auth from "./auth";
import resturant from "./resturant"

export default combineReducers({
  auth,
  resturant,
});
