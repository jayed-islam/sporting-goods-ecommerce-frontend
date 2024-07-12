import { Helmet } from "react-helmet-async";
import CartView from "@/sections/cart/view/cart-view";

export default function CartPage() {
  return (
    <>
      <Helmet>
        <title>Cart: Fantasy Sports</title>
      </Helmet>
      <CartView />
    </>
  );
}
