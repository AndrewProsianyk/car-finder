import clsx from "clsx";
import styles from "./CarBasicInfo.module.scss";

import {
  PinIcon,
  GasPumpIcon,
  TachometerIcon,
  TransmissionIcon,
} from "../../assets/icons/car-info/carInfoIcons.js";

export default function CarBasicInfoList({
  location,
  fuelType,
  mileage,
  transmission,
  variant = "horizontal-m",
}) {
  return (
    <ul className={clsx(styles.basicInfoList, styles[variant])}>
      <li className={styles.basicInfoListItem}>
        <PinIcon />
        {location}
      </li>
      <li className={styles.basicInfoListItem}>
        <TachometerIcon />
        {fuelType}
      </li>
      <li className={styles.basicInfoListItem}>
        <GasPumpIcon />
        {mileage} mi
      </li>
      <li className={styles.basicInfoListItem}>
        <TransmissionIcon />
        {transmission}
      </li>
    </ul>
  );
}
