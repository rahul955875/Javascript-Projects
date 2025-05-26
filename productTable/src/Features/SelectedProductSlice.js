import { createSlice } from "@reduxjs/toolkit";

const selectedProductSlice = createSlice({
  name: "selectedProduct",
  initialState: {
    id: "",
    title: "",
    description: "",
    price: "",
    rating: "",
  },
  reducers: {
    selectProduct: (state, action) => {
      return action.payload;
    },
    deSelecteProduct: () => {
      return {
        id: "",
        title: "",
        description: "",
        price: "",
        rating: "",
      };
    },
  },
});

export const { selectProduct, deSelecteProduct } = selectedProductSlice.actions;
export default selectedProductSlice.reducer;
