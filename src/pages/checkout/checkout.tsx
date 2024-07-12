import { Helmet } from "react-helmet-async";
import CheckoutView from "../../sections/checkout/view/checkout-view";

export default function CheckoutPage() {
  return (
    <>
      <Helmet>
        <title>Checkout: Fantasy Sports</title>
      </Helmet>
      <CheckoutView />
    </>
  );
}
