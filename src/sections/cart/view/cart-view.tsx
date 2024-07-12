import { useAppSelector } from "@/redux/hooks";
import { Typography } from "@mui/material";
import OrderSummary from "../common/order-summery";

import CartItem from "../common/cart-item";
import { NavLink } from "react-router-dom";
import { paths } from "@/layouts/paths";
import ScrollToTop from "@/hooks/use-scroll-to-top";

const CartView = () => {
  const { cartItems } = useAppSelector((state) => state.cart);

  return (
    <div className="bg-gray-100 py-11">
      <ScrollToTop />
      <div className="max-w-5xl mx-auto px-5 xl:px-0">
        <Typography variant="h4" gutterBottom>
          Your Cart
        </Typography>
        <div className="w-full flex items-start flex-col md:flex-row gap-7">
          <div className="flex flex-col flex-1 gap-3">
            {cartItems.length === 0 ? (
              <div className="mx-auto mt-11">
                <h2 className="text-lg font-semibold mb-5">
                  Your cart is empty
                </h2>
                <NavLink
                  to={paths.allProducts}
                  className="px-5 py-2 rounded-md bg-yellow-400 hover:bg-yellow-500 text-white"
                >
                  Add product
                </NavLink>
              </div>
            ) : (
              cartItems.map((item, index) => (
                <CartItem item={item} key={index} />
              ))
            )}
          </div>
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default CartView;
