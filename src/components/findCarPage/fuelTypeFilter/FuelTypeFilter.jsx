import styles from "./FuelTypeFilter.module.scss";
import CheckBox from "../../checkbox/Checkbox";
import FilterContainer from "../filterContainer/FilterContainer";
import { useSearchStore } from "../../../stores/searchStore";
import fuelTypesData from "../../../lib/fuelTypes";

export default function FuelTypeFilter() {
  const fuelTypes = useSearchStore((s) => s.filters.fuelTypes);
  const setFilter = useSearchStore((s) => s.setFilter);

  const toggleFuelType = (type) => {
    const updated = fuelTypes.includes(type)
      ? fuelTypes.filter((t) => t !== type)
      : [...fuelTypes, type];

    setFilter("fuelTypes", updated);
  };

  return (
    <FilterContainer title="Fuel type">
      <ul className={styles.typesList}>
        {fuelTypesData.map((item, idx) => {
          return (
            <li key={idx}>
              <CheckBox
                label={item.label}
                checked={fuelTypes?.includes(item.label)}
                onChange={() => toggleFuelType(item.label)}
              />
            </li>
          );
        })}
      </ul>
    </FilterContainer>
  );
}
