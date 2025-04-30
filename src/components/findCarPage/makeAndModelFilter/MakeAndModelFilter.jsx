import carData from "../../../lib/carData";
import { useSearchStore } from "../../../stores/searchStore";
import InputSelect from "../../inputSelect/InputSelect";
import FilterContainer from "../filterContainer/FilterContainer";
import styles from "./MakeAndModelFilter.module.scss";

export default function MakeAndModelFilter() {
  const make = useSearchStore((s) => s.filters.make);
  const model = useSearchStore((s) => s.filters.model);
  const setFilter = useSearchStore((s) => s.setFilter);

  const handleChangeMake = (make) => {
    setFilter("make", make);
    if (model) {
      setFilter("model", null);
    }
  };
  const handleChangeModel = (model) => {
    setFilter("model", model);
  };

  return (
    <FilterContainer title="Make and model">
      <div className={styles.inputsWrap}>
        <InputSelect
          placeholder="Any make"
          options={carData.makes}
          onChange={handleChangeMake}
          value={make}
        />
        <InputSelect
          placeholder="Any model"
          options={make ? carData.models[make.value] || [] : []}
          onChange={handleChangeModel}
          value={model}
          disabled={!make}
        />
      </div>
    </FilterContainer>
  );
}
