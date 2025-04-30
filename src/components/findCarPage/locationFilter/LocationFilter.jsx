import PinIcon from "../../../assets/icons/car-info/PinIcon";
import locationsList from "../../../lib/locationsList";
import { useSearchStore } from "../../../stores/searchStore";
import InputSelect from "../../inputSelect/InputSelect";
import FilterContainer from "../filterContainer/FilterContainer";
import styles from "./LocationFilter.module.scss";

export default function LocationFilter() {
  const location = useSearchStore((s) => s.filters.location);
  const setFilter = useSearchStore((s) => s.setFilter);

  const handleChange = (selectedLocation) => {
    setFilter("location", selectedLocation);
  };
  return (
    <FilterContainer title="Location">
      <InputSelect
        placeholder="Any location"
        options={locationsList}
        icon={<PinIcon />}
        value={location}
        onChange={handleChange}
      />
    </FilterContainer>
  );
}
