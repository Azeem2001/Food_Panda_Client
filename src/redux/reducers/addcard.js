import { Types } from "../Types";

let initalState = {
  cart: [],

};

export default function (state = initalState, action) {
  let { type, payload } = action;
  switch (type) {
    case Types.ADD:
    return {
        ...state,
        cart: payload,
        
      };
      case Types.REMOVER:
        return{
          ...state,
          cart: payload
        }
    default:
      return state;
  }
}
