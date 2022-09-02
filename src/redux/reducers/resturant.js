import { Types } from "../Types";

let initialState = {
  success: null,
  status: "",
  resturant: null,
  error: "",
  singleResturant: {},
};

export default function (state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case Types.GET_RESTURANT_NAME:
      return {
        ...state,
        ...payload,
      };
    case Types.SINGLE_RESTURANT_ID:
      return {
        ...state,
        singleResturant: payload?.restaurant,
        ...payload,
      };
    case Types.GET_RESTURANT_NAME_FAILED:
    case Types.SINGLE_RESTURANT_ID_FAILED:
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
