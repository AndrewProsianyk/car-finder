import CrossIcon from "../../../assets/icons/CrossIcon";
import { useSearchStore } from "../../../stores/searchStore";
import styles from "./ActiveFilterList.module.scss";

export default function ActiveFilterList({ totalResults = 1 }) {
  const filters = useSearchStore((s) => s.filters);
  const setFilter = useSearchStore((s) => s.setFilter);
  const resetFilters = useSearchStore((s) => s.resetFilters);

  const activeFilters = [];

  if (filters.bodyTypes && filters.bodyTypes.length > 0) {
    filters.bodyTypes.forEach((type) => {
      activeFilters.push({ label: type, key: "bodyTypes", value: type });
    });
  }

  if (filters.fuelTypes && filters.fuelTypes.length > 0) {
    filters.fuelTypes.forEach((type) => {
      activeFilters.push({ label: type, key: "fuelTypes", value: type });
    });
  }

  if (filters.location) {
    const locationLabel =
      typeof filters.location === "string"
        ? locationsList.find((l) => l.value === filters.location)?.label
        : filters.location.label;
    if (locationLabel) {
      activeFilters.push({ label: locationLabel, key: "location" });
    }
  }

  if (filters.make) {
    activeFilters.push({
      label: filters.make.label,
      key: "make",
    });
  }

  if (filters.model) {
    activeFilters.push({
      label: filters.model.label,
      key: "model",
    });
  }

  if (filters.yearFrom) {
    activeFilters.push({
      label: `From ${filters.yearFrom}`,
      key: "yearFrom",
    });
  }

  if (filters.yearTo) {
    activeFilters.push({
      label: `To ${filters.yearTo}`,
      key: "yearTo",
    });
  }

  if (filters.minPrice) {
    activeFilters.push({
      label: `From $${filters.minPrice}`,
      key: "minPrice",
    });
  }

  if (filters.maxPrice) {
    activeFilters.push({
      label: `Up to $${filters.maxPrice}`,
      key: "maxPrice",
    });
  }

  if (filters.transmissionTypes) {
    filters.transmissionTypes.forEach((type) => {
      activeFilters.push({
        label: type,
        key: "transmissionTypes",
        value: type,
      });
    });
  }

  if (filters.mileageMin) {
    activeFilters.push({
      label: `From ${filters.mileageMin} mi`,
      key: "mileageMin",
    });
  }

  if (filters.mileageMax) {
    activeFilters.push({
      label: `Up to ${filters.mileageMax} mi`,
      key: "mileageMax",
    });
  }

  const handleRemove = (filterKey, value) => {
    if (filterKey === "bodyTypes") {
      const updated = filters.bodyTypes.filter((v) => v !== value);
      setFilter("bodyTypes", updated);
    } else if (filterKey === "transmissionTypes") {
      const updated = filters.transmissionTypes.filter((v) => v !== value);
      setFilter("transmissionTypes", updated);
    } else if (filterKey === "priceRange") {
      setFilter("priceMin", null);
      setFilter("priceMax", null);
    } else if (filterKey === "make") {
      setFilter("make", null);
    } else if (filterKey === "model") {
      setFilter("model", null);
    } else if (filterKey === "fuelTypes") {
      const updated = filters.fuelTypes.filter((v) => v !== value);
      setFilter("fuelTypes", updated);
    } else {
      setFilter(filterKey, null);
    }
  };

  return (
    <div className={styles.listWrap}>
      <div className={styles.leftSide}>
        <span className={styles.resultsTitle}>
          Showing {totalResults} results
        </span>
        {activeFilters.length > 0 && (
          <ul className={styles.activeFilterList}>
            {activeFilters.map((item, idx) => (
              <ActiveFilterListItem
                item={item}
                key={idx}
                onRemoveItem={handleRemove}
              />
            ))}
          </ul>
        )}
      </div>
      <button className={styles.resetFiltersBtn} onClick={resetFilters}>
        Clear all
      </button>
    </div>
  );
}

function ActiveFilterListItem({ item, onRemoveItem }) {
  return (
    <li className={styles.filterListItem}>
      <span className={styles.listItemLabel}>{item.label}</span>
      <button
        className={styles.deleteItemBtn}
        onClick={() => onRemoveItem(item.key, item.value)}
      >
        <CrossIcon />
      </button>
    </li>
  );
}
