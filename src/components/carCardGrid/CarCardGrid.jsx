import { useEffect } from "react";
import useCheckScreenWidth from "../../hooks/useCheckScreenWidth";

import { useCarStore } from "../../stores/carStore";
import CarCard from "../carCard/CarCard";
import styles from "./CarCardGrid.module.scss";

export default function CarCardGrid() {
  const isMobile = useCheckScreenWidth();

  const { cars, fetchCars } = useCarStore();

  useEffect(() => {
    fetchCars();
  }, [fetchCars]);

  if (!cars || cars.length < 3) return <div>Loading cars...</div>;

  return (
    <section className={styles.carGrid}>
      <div className={styles.bigCard}>
        <CarCard car={cars[0]} variant={isMobile ? "default-m" : "big"} />
      </div>
      <div className={`${styles.smallCard} ${styles.top}`}>
        <CarCard
          car={cars[1]}
          variant={isMobile ? "default-m" : "horizontal-m"}
        />
      </div>
      <div className={`${styles.smallCard} ${styles.bottom}`}>
        <CarCard
          car={cars[2]}
          variant={isMobile ? "default-m" : "horizontal-m"}
        />
      </div>
    </section>
  );
}
