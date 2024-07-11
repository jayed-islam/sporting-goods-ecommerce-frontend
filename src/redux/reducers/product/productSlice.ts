import { createSlice } from "@reduxjs/toolkit";

export interface CartItem {
  productId: string;
  name: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  about?: string;
}

interface ProductState {
  lastVisitedProducts: CartItem[];
}

const initialState: ProductState = {
  lastVisitedProducts: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

// export const {} = productSlice.actions;

export default productSlice.reducer;
