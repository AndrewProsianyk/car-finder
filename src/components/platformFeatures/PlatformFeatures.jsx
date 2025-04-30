import styles from "./PlatformFeatures.module.scss";
import {
  CertificateIcon,
  SteeringWheelIcon,
  ListIcon,
  CrashCarIcon,
} from "../../assets/icons/platform-features/platformFeaturesIcons";
import CarPageSection from "../carPageSection/CarPageSection";

const platformFeaturesList = [
  { icon: <CertificateIcon />, feature: "Checked and Certified by Finder" },
  { icon: <SteeringWheelIcon />, feature: "Single Owner" },
  { icon: <ListIcon />, feature: "Well-Equipped" },
  { icon: <CrashCarIcon />, feature: "No Accident / Damage Reported" },
];

export default function PlatformFeatures() {
  return (
    <CarPageSection>
      <ul className={styles.featuresList}>
        {platformFeaturesList.map((item, idx) => (
          <li className={styles.listItem} key={idx}>
            <span>{item.icon}</span>
            <span>{item.feature}</span>
          </li>
        ))}
      </ul>
    </CarPageSection>
  );
}
