import { combineReducers } from "redux";
import { categoryReducer } from "./categoryReducer";
import { productsReducer } from "./productsReducer";
import { basketReducer } from "./basketReducer";

const rootReducer = combineReducers({
    categoryReducer,
    productsReducer,
    basketReducer
})

export default rootReducer;