import { configureStore } from "@reduxjs/toolkit";
import { fetchUserApi } from "./features/fetchUser";
export const store = configureStore({
  reducer: {
    [fetchUserApi.reducerPath]: fetchUserApi.reducer,
  },
  middleware : (defalultMiddleware) =>{
  return   defalultMiddleware().concat(fetchUserApi.middleware)
  }
});
