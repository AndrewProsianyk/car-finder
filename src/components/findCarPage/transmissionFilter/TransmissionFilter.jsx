import { useSearchStore } from "../../../stores/searchStore";
import CheckBox from "../../checkbox/Checkbox";
import FilterContainer from "../filterContainer/FilterContainer";
import styles from "./TransmissionFilter.module.scss";

const transmissionTypesList = [
  {
    label: "Automatic",
    value: "automatic",
  },
  {
    label: "Manual",
    value: "manual",
  },
];

export default function TransmissionFilter() {
  const transmissionTypes = useSearchStore((s) => s.filters.transmissionTypes);
  const setFilter = useSearchStore((s) => s.setFilter);

  const toggleBodyType = (type) => {
    const updated = transmissionTypes.includes(type)
      ? transmissionTypes.filter((t) => t !== type)
      : [...transmissionTypes, type];

    setFilter("transmissionTypes", updated);
  };
  return (
    <FilterContainer title="Transmission">
      <ul className={styles.typesList}>
        {transmissionTypesList.map((item, idx) => {
          return (
            <li key={idx}>
              <CheckBox
                label={item.label}
                checked={transmissionTypes.includes(item.label)}
                onChange={() => toggleBodyType(item.label)}
              />
            </li>
          );
        })}
      </ul>
    </FilterContainer>
  );
}
