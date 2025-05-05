import CarCard from "../../carCard/CarCard";
import styles from "./FilteredCarList.module.scss";

export default function FilteredCarList({ cars, isGrid }) {
  if (cars.length === 0) {
    return <div>No cars match your search.</div>;
  }

  return (
    <ul
      className={styles.filteredCarList}
      style={{ flexDirection: isGrid ? "column" : "row" }}
    >
      {cars.map((car) => (
        <CarCard
          key={car.id}
          car={car}
          variant={isGrid ? "horizontal-l" : "default-s"}
        />
      ))}
    </ul>
  );
}
