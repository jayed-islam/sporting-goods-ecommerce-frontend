import { RootState } from "@/redux/store";
import { IProduct } from "@/types/product";
import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

interface CartState {
  cartItems: ICartItem[];
  selectedDistrict: string;
}

const initialState: CartState = {
  cartItems: [],
  selectedDistrict: "",
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ICartItem>) => {
      const product = action.payload;
      const existingProduct = state.cartItems.find(
        (p) => p.product._id === product.product._id
      );

      if (existingProduct) {
        if (existingProduct.quantity < product.product.stock) {
          existingProduct.quantity++;
          toast.success("Product quantity updated successfully!!");
        } else {
          toast.error(
            "You've reached the maximum stock limit for this product"
          );
        }
      } else {
        state.cartItems.push(product);
        toast.success("Product added to cart successfully!!");
      }
    },
    updateProductQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const product = state.cartItems.find((p) => p.product._id === id);
      if (product) {
        product.quantity = quantity;
      }
    },
    deleteProduct: (state, action: PayloadAction<string>) => {
      if (state.cartItems.length > 0) {
        state.cartItems = state.cartItems.filter(
          (p) => p.product._id !== action.payload
        );
        toast.success("Product deleted successfully.");
      } else {
        toast.error("Your cart is empty");
      }
    },
    setDistrictName: (state, action: PayloadAction<string>) => {
      state.selectedDistrict = action.payload;
    },
  },
});

export const {
  addProduct,
  updateProductQuantity,
  deleteProduct,
  setDistrictName,
} = cartSlice.actions;
export default cartSlice.reducer;

export const selectProducts = (state: RootState) => state.cart.cartItems;

export const selectSubtotal = createSelector(
  (state: RootState) => state.cart.cartItems,
  (cartItems) =>
    cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    )
);

export const selectTotalWithVAT = createSelector(selectSubtotal, (subtotal) => {
  const vatTotal = subtotal * 0.15;
  const totalWithVAT = subtotal + vatTotal;
  return {
    subtotal: subtotal.toFixed(2),
    vatTotal: vatTotal.toFixed(2),
    totalWithVAT: totalWithVAT.toFixed(2),
  };
});

export const selectTotalItems = createSelector(
  (state: RootState) => state.cart.cartItems,
  (cartItems) =>
    cartItems.reduce((total, product) => total + product.quantity, 0)
);

export const selectShippingFee = createSelector(
  (state: RootState) => state.cart.selectedDistrict,
  (district) => (district === "1" ? 71 : 110)
);

export const selectIsCartInStock = createSelector(selectProducts, (cartItems) =>
  cartItems.every((item) => item.product.stock > 0)
);
