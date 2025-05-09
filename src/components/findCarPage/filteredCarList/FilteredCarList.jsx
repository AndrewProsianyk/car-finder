import { useCarStore } from "../../../stores/carStore";
import CarCard from "../../carCard/CarCard";
import Loader from "../../loader/Loader";
import styles from "./FilteredCarList.module.scss";

export default function FilteredCarList({ cars, isGrid }) {
  const loading = useCarStore((s) => s.loading);

  if (cars.length === 0) {
    return <div>No cars match your search.</div>;
  }

  return (
    <ul
      className={styles.filteredCarList}
      style={{ flexDirection: isGrid ? "column" : "row" }}
    >
      {loading && <Loader />}
      {cars.map((car) => (
        <CarCard
          key={car._id}
          car={car}
          variant={isGrid ? "horizontal-l" : "default-s"}
        />
      ))}
    </ul>
  );
}
