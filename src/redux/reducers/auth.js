import { Types } from "../Types";

let initialState = {
  success: null,
  status: "",
  token: "",
  error: "",
};

export default function (state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case Types.USER_REGISTERED:
    case Types.USER_LOGIN:
      return {
        ...state,
        success: payload?.success,
        status: payload?.status,
        token: payload?.token,
      };
    case Types.USER_REGISTERED_FAILED:
    case Types.USER_LOGIN_FAILED:

      return {
        ...state,
        success: false,
        status: "",
        token: "",
        error: payload?.error,
      };

    default:
      return state;
  }
}
