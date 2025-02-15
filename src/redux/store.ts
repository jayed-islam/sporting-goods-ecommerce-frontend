import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import productSlice from "./reducers/product/productSlice";
import cartSlice from "./reducers/cart/cartSlice";

export const store = configureStore({
  reducer: {
    product: productSlice,
    cart: cartSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
