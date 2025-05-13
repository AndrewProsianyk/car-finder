import { useEffect } from "react";
import useCheckScreenWidth from "../../hooks/useCheckScreenWidth";

import { useCarStore } from "../../stores/carStore";
import CarCard from "../carCard/CarCard";
import styles from "./CarCardGrid.module.scss";
import Loader from "../loader/Loader";

export default function CarCardGrid() {
  const { isMobile, width } = useCheckScreenWidth();

  const { cars, fetchCars, loading } = useCarStore();

  const bigCardVariant = () => {
    let variant;
    if (isMobile) {
      variant = "default-m";
    } else if (!isMobile && width < 1230) {
      variant = "horizontal-m";
    } else variant = "big";

    return variant;
  };

  useEffect(() => {
    fetchCars();
  }, [fetchCars]);

  if (!cars || cars.length < 3) return <div>Loading cars...</div>;

  return (
    <section className={styles.carGrid}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className={styles.bigCard}>
            <CarCard car={cars[5]} variant={bigCardVariant()} />
          </div>
          <div className={`${styles.smallCard} ${styles.top}`}>
            <CarCard
              car={cars[16]}
              variant={isMobile && width < 1230 ? "default-m" : "horizontal-m"}
            />
          </div>
          <div className={`${styles.smallCard} ${styles.bottom}`}>
            <CarCard
              car={cars[37]}
              variant={isMobile && width < 1230 ? "default-m" : "horizontal-m"}
            />
          </div>
        </>
      )}
    </section>
  );
}
