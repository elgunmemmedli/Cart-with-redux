import { BASKET_GET } from "../actions/basketActions";

export const basketReducer = (state = [], { type, payload }) => {
  switch (type) {
    case BASKET_GET:
      return payload;
    default:
      return state;
  }
};
