import AccessoriesSection from "../components/accessoriesSection/AccessoriesSection";
import BodyTypesSection from "../components/bodyTypesSection/BodyTypesSection";
import FeaturesSection from "../components/featuresSection/FeaturesSection";
import GoToTopButton from "../components/findCarPage/goToTopButton/GoToTopButton";
import HeroSection from "../components/heroSection/HeroSection";
import LatestListingsSection from "../components/latestListingsSection/LatestListingsSection";
import MakesLogoSection from "../components/makesLogoSection/MakesLogoSection";
import PopularCategoriesSection from "../components/popularCategoriesSection/PopularCategoriesSection";
import TopOffersSection from "../components/topOffersSection/TopOffersSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BodyTypesSection />
      <TopOffersSection />
      <MakesLogoSection />
      <PopularCategoriesSection />
      <FeaturesSection />
      <LatestListingsSection />
      <AccessoriesSection />
      <GoToTopButton />
    </>
  );
}
