
 import { combineReducers } from "@reduxjs/toolkit"
import getProductsDataReducer from "./getItemsReducer";
export const rootReducer=combineReducers({
   getproductsdata:getProductsDataReducer,
})