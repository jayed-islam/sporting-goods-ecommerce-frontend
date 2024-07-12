import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import SingleProductDetails from "../../sections/product/view/single-product-detail";

export default function SingleProductDetailsPage() {
  const { id } = useParams();
  return (
    <>
      <Helmet>
        <title>Single Product: Fantasy Sports</title>
      </Helmet>
      <SingleProductDetails id={id as string} />
    </>
  );
}
