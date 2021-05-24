import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";


//The GlOBAL STORE REDUCER
export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
