import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import styles from "./RangeSlider.module.scss";

import FilterContainer from "../filterContainer/FilterContainer";
import TextInput from "../../textInput/TextInput";
import DollarIcon from "../../../assets/icons/DollarIcon";
import { useSearchStore } from "../../../stores/searchStore";

export default function RangeSlider() {
  const minPrice = useSearchStore((s) => s.filters.minPrice);
  const maxPrice = useSearchStore((s) => s.filters.maxPrice);
  const setFilter = useSearchStore((s) => s.setFilter);

  const handleSliderChange = ([newMin, newMax]) => {
    setFilter("minPrice", newMin);
    setFilter("maxPrice", newMax);
  };

  const handleInputChange = (key) => (value) => {
    const numValue = Number(value);
    setFilter(key, numValue);
  };

  return (
    <FilterContainer title="Price">
      <Slider
        range
        marks={2}
        min={0}
        max={30000}
        step={1000}
        allowCross={false}
        value={[minPrice, maxPrice]}
        onChange={handleSliderChange}
        styles={{
          rail: { backgroundColor: "#E0E5EB" },
          track: {
            backgroundColor: "#1D2735",
          },
          handle: {
            backgroundColor: "#fff",
            borderColor: "#1D2735",
          },
        }}
      />
      <div className={styles.inputsWrap}>
        <TextInput
          placeholder="Min"
          value={minPrice}
          onChange={handleInputChange("minPrice")}
          icon={<DollarIcon />}
          type={"number"}
        />
        <TextInput
          placeholder="Max"
          value={maxPrice}
          onChange={handleInputChange("maxPrice")}
          icon={<DollarIcon />}
          type={"number"}
        />
      </div>
    </FilterContainer>
  );
}
