import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: JSON.parse(localStorage.getItem("products")) || [
      {
        id: 1,
        title: "samsung galaxy s25",
        description: "lorem lkasjdfl  alsjkd dfjka sdf",
        price: 100000,
        rating: 5,
      },
    ],
  },

  reducers: {
    addProuduct: (state, action) => {
      console.log(action.payload);
      state.products.push(action.payload);
      localStorage.setItem("products", JSON.stringify(state.products));
    },

    removeItem: (state, action) => {
      state.products = state.products.filter((p) => p.id != action.payload);
      localStorage.setItem("products", JSON.stringify(state.products));
    },

    updateProduct: (state, action) => {
      //   let product = state.products.find((p) => p.id == action.payload.id);
      //   console.log(product)
      //   product = action.payload;
      state.products = state.products.map((p) => {
        if (p.id === action.payload.id) {
          return action.payload;
        }
        return p;
      });
      localStorage.setItem("products", JSON.stringify(state.products));
    },

    clearAllProducts: (state) => {
      state.products.length = 0;
    },
  },
});

export const { addProuduct, removeItem, updateProduct, clearAllProducts } =
  productSlice.actions;
export default productSlice.reducer;
