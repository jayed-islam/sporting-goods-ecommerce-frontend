import ScrollToTop from "../../../hooks/use-scroll-to-top";
import HomeCategorySection from "../home-category-section";
import HomeContactView from "../home-contact-view";
import HomeFeatureSection from "../home-feature-section";
import HomeHeroSection from "../home-hero-section";

const HomeView = () => {
  return (
    <div>
      <ScrollToTop />
      <HomeHeroSection />
      <HomeCategorySection />
      <HomeFeatureSection />
      <HomeContactView />
    </div>
  );
};

export default HomeView;
