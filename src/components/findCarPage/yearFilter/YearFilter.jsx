import yearsList from "../../../lib/yearsList";
import InputSelect from "../../inputSelect/InputSelect";
import FilterContainer from "../filterContainer/FilterContainer";
import styles from "./YearFilter.module.scss";
import { useSearchStore } from "../../../stores/searchStore";

export default function YearFilter() {
  const yearFrom = useSearchStore((s) => s.filters.yearFrom);
  const yearTo = useSearchStore((s) => s.filters.yearTo);
  const setFilter = useSearchStore((s) => s.setFilter);

  const selectedYearFromOption = yearsList.find((y) => y.value === yearFrom);
  const selectedYearToOption = yearsList.find((y) => y.value === yearTo);

  const filteredYearToOptions = yearFrom
    ? yearsList.filter((y) => y.value > yearFrom)
    : yearsList;

  const handleYearFromChange = (year) => {
    setFilter("yearFrom", year.value);
    setFilter("yearTo", null);
  };

  const handleYearToChange = (year) => {
    setFilter("yearTo", year.value);
  };

  return (
    <FilterContainer title="Year">
      <div className={styles.inputsWrap}>
        <InputSelect
          placeholder="From"
          options={yearsList}
          value={selectedYearFromOption}
          onChange={handleYearFromChange}
        />
        <InputSelect
          placeholder="To"
          options={filteredYearToOptions}
          value={selectedYearToOption}
          onChange={handleYearToChange}
        />
      </div>
    </FilterContainer>
  );
}
