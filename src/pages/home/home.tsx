import { Helmet } from "react-helmet-async";
import HomeView from "../../sections/home/view/home-view-content";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home: Fantasy Sports</title>
      </Helmet>
      <HomeView />
    </>
  );
}
