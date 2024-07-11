import { RootState } from "@/redux/store";
import { IProduct } from "@/types/product";
import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

interface ICartItem {
  product: IProduct;
  quantity: number;
}

interface CartState {
  products: ICartItem[];
  selectedDistrict: string;
}

const initialState: CartState = {
  products: [],
  selectedDistrict: "",
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ICartItem>) => {
      const product = action.payload;
      const existingProduct = state.products.find(
        (p) => p.product._id === product.product._id
      );

      if (existingProduct) {
        if (existingProduct.quantity < product.product.stock) {
          existingProduct.quantity++;
        } else {
          toast.error(
            "You've reached the maximum stock limit for this product"
          );
        }
      } else {
        state.products.push(product);
      }
    },
    updateProductQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const product = state.products.find((p) => p.product._id === id);
      if (product) {
        product.quantity = quantity;
      }
    },
    deleteProduct: (state, action: PayloadAction<string>) => {
      if (state.products.length > 0) {
        state.products = state.products.filter(
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

export const selectProducts = (state: RootState) => state.cart.products;

export const selectSubtotal = createSelector(selectProducts, (products) =>
  products.reduce(
    (subtotal, product) => subtotal + product.product.price * product.quantity,
    0
  )
);

// export const selectShippingFee = createSelector(
//   selectSelectedDistrict,
//   (district) => {
//     // console.log("district", district);
//     return district === "1" ? 71 : 110;
//   }
// );

export const selectTotal = createSelector(
  selectSubtotal,
  (subtotal) => subtotal + 101
);

export const selectTotalItems = createSelector(
  (state: RootState) => state.cart.products,
  (products) => products.reduce((total, product) => total + product.quantity, 0)
);
