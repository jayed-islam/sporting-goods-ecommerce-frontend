import { Helmet } from "react-helmet-async";
import SuccessViewPage from "../../sections/success/success-view";

export default function SuccessPage() {
  return (
    <>
      <Helmet>
        <title>Success: Fantasy Sports</title>
      </Helmet>
      <SuccessViewPage />
    </>
  );
}
