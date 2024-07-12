import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import AllProductView from "../../sections/product/view/all-product-view";

export default function AllProductPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category");
  return (
    <>
      <Helmet>
        <title>All Product: Fantasy Sports</title>
      </Helmet>
      <AllProductView category={category as string} />
    </>
  );
}
