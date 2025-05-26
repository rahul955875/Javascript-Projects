import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import selectedProductSlice from "./SelectedProductSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    selectedProduct: selectedProductSlice,
  },
});
