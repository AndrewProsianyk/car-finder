import CarPageSection from "../carPageSection/CarPageSection";
import styles from "./CarSpecificationsList.module.scss";

export default function CarSpecificationsList({ car }) {
  return (
    <CarPageSection title="Specification">
      <ul className={styles.specList}>
        <li className={styles.specListItem}>
          Manufacturing year: <span>{car.year}</span>
        </li>
        <li className={styles.specListItem}>
          Mileage: <span>{car.mileage}</span>
        </li>
        <li className={styles.specListItem}>
          Body type: <span>{car.bodyType}</span>
        </li>
        <li className={styles.specListItem}>
          Fuel type: <span>{car.fuelType}</span>
        </li>
        <li className={styles.specListItem}>
          Transmission: <span>{car.transmission}</span>
        </li>
      </ul>
    </CarPageSection>
  );
}
