import { useSearchStore } from "../../../stores/searchStore";
import TextInput from "../../textInput/TextInput";
import FilterContainer from "../filterContainer/FilterContainer";
import styles from "./MileageFilter.module.scss";

export default function MileageFilter() {
  const mileageMin = useSearchStore((s) => s.filters.mileageMin);
  const mileageMax = useSearchStore((s) => s.filters.mileageMax);
  const setFilter = useSearchStore((s) => s.setFilter);

  const handleMinValueChange = (min) => {
    if (min <= mileageMax || mileageMax === 0) {
      setFilter("mileageMin", min);
    } else {
      alert("Min mileage cannot be greater than Max mileage");
    }
  };

  const handleMaxValueChange = (max) => {
    if (max >= mileageMin || mileageMin === 0) {
      setFilter("mileageMax", max);
    } else {
      alert("Max mileage cannot be less than Min mileage");
    }
  };

  return (
    <FilterContainer title="Mileage">
      <div className={styles.inputsWrap}>
        <TextInput
          value={mileageMin}
          onChange={handleMinValueChange}
          type="number"
          placeholder="From"
        />
        <TextInput
          value={mileageMax}
          onChange={handleMaxValueChange}
          type="number"
          placeholder="To"
        />
      </div>
    </FilterContainer>
  );
}
