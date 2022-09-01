import { Types } from "../Types";

let initialState = {
  success: null,
  status: "",
  resturant: "",
  error: "",
};

export default function (state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case Types.GET_RESTURANT_NAME:
      return {
        ...state,
        ...payload,
      };
    case Types.GET_RESTURANT_NAME_FAILED:
      return {
        success: null,
        status: "",
        resturant: "",
        error: "",
      };
    default:
      return state;
  }
}
