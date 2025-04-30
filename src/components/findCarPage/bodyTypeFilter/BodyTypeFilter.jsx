import bodyTypeData from "../../../lib/bodyTypeData";
import CheckBox from "../../checkbox/Checkbox";
import FilterContainer from "../filterContainer/FilterContainer";
import styles from "./BodyTypeFilter.module.scss";
import { useSearchStore } from "../../../stores/searchStore";

export default function BodyTypeFilter() {
  const bodyTypes = useSearchStore((s) => s.filters.bodyTypes);
  const setFilter = useSearchStore((s) => s.setFilter);

  const toggleBodyType = (type) => {
    const updated = bodyTypes.includes(type)
      ? bodyTypes.filter((t) => t !== type)
      : [...bodyTypes, type];

    setFilter("bodyTypes", updated);
  };

  return (
    <FilterContainer title="Body type">
      <ul className={styles.typesList}>
        {bodyTypeData.map((item, idx) => {
          return (
            <li key={idx}>
              <CheckBox
                label={item.label}
                checked={bodyTypes.includes(item.label)}
                onChange={() => toggleBodyType(item.label)}
              />
            </li>
          );
        })}
      </ul>
    </FilterContainer>
  );
}
