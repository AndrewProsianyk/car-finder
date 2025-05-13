import styles from "./FeaturesSection.module.scss";
import PageSection from "../pageSection/PageSection";
import FeaturesList from "../featuresList/FeaturesList";
import useCheckScreenWidth from "../../hooks/useCheckScreenWidth";
import { featuresIcons } from "../../assets/icons/features/featuresIcons";

const featuresData = [
  {
    icon: <featuresIcons.CopyIcon />,
    text: "Over 1 million listings",
  },
  {
    icon: <featuresIcons.DocumentSearchIcon />,
    text: "Personalized search",
  },
  {
    icon: <featuresIcons.CarIcon />,
    text: "Online car appraisal",
  },
  {
    icon: <featuresIcons.LightBulbIcon />,
    text: "Non-stop innovation",
  },
];

export default function FeaturesSection() {
  const { width } = useCheckScreenWidth();

  if (width < 1160) return;

  return (
    <PageSection title="What sets Finder apart?">
      <FeaturesList data={featuresData} variant="cardLight" />
    </PageSection>
  );
}
