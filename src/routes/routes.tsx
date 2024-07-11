import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main";
import HomePage from "../pages/home/home";
import AllProductPage from "@/pages/product/all-product";
import SingleProductDetailsPage from "@/pages/product/single-product";

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
    ],
  },
]);

export default routes;
