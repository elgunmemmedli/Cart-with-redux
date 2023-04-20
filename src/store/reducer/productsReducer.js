import { PRODUCTS_GET } from "../actions/productsActions";

export const productsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case PRODUCTS_GET:
      return payload;
    default:
      return state;
  }
};
