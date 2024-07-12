import { Helmet } from "react-helmet-async";
import AboutPage from "../../sections/about/about-us-view";

export default function AboutUsPage() {
  return (
    <>
      <Helmet>
        <title>About Us: Fantasy Sports</title>
      </Helmet>
      <AboutPage />
    </>
  );
}
