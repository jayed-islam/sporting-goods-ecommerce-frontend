import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main";
import HomePage from "../pages/home/home";
import AllProductPage from "@/pages/product/all-product";
import SingleProductDetailsPage from "@/pages/product/single-product";
import CartPage from "@/pages/cart/cart";
import CheckoutPage from "@/pages/checkout/checkout";
import SuccessPage from "@/pages/success/page";
import ManageProducPage from "@/pages/manage-product/manage-product";
import AboutUsPage from "@/pages/about-us/about-us";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/all-products",
        element: <AllProductPage />,
      },
      {
        path: "/product/:id",
        element: <SingleProductDetailsPage />,
      },
      {
        path: "/carts",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/success",
        element: <SuccessPage />,
      },
      {
        path: "/manage-products",
        element: <ManageProducPage />,
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
    ],
  },
]);

export default routes;
