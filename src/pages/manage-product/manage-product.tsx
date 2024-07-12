import { Helmet } from "react-helmet-async";
import ManageProductView from "../../sections/manage-product/view/manage-product-view";

export default function ManageProducPage() {
  return (
    <>
      <Helmet>
        <title>Manage Product: Fantasy Sports</title>
      </Helmet>
      <ManageProductView />
    </>
  );
}
