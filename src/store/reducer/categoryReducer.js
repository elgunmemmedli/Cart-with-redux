import { CATEGORY_GET } from "../actions/categoryActions";

export const categoryReducer = (state = [], { type, payload }) => {
  switch (type) {
    case CATEGORY_GET:
      return payload;
    default:
      return state;
  }
};