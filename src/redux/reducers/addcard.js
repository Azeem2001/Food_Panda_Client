import { Types } from "../Types";

let initalState = {
  cart: [],
  totalNumber: null,
  totalPrice: null,
};

export default function(state = initalState, action){
  let { type, payload } = action;
  switch (type) {
    case Types.ADD:
      return {
        ...state,
        cart: [...state.cart, payload],
      };
    default:
      return state;
  }
};
