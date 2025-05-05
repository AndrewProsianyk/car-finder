import React, { useEffect, useMemo, useState } from "react";
import styles from "./FindCarPage.module.scss";
import Container from "../../components/container/Container";

import Breadcrumbs from "../../components/breadCrumbs/Breadcrumbs";
import ActiveFilterList from "../../components/findCarPage/activeFilterList/ActiveFilterList";
import CarFilterBlock from "../../components/findCarPage/carFilterBlock/CarFilterBlock";
import FilteredCarList from "../../components/findCarPage/filteredCarList/FilteredCarList";

import { useCarStore } from "../../stores/carStore";
import { useSearchStore } from "../../stores/searchStore";
import ChangeGridButton from "../../components/findCarPage/changeGridButton/ChangeGridButton";

export default function FindCarPage() {
  const cars = useCarStore((state) => state.cars);
  const filters = useSearchStore((s) => s.filters);
  const getFilteredCars = useSearchStore((s) => s.getFilteredCars);
  const filteredCars = useMemo(() => getFilteredCars(cars), [cars, filters]);

  const [isGrid, setIsGrid] = useState(false);

  const toggleGrid = () => {
    setIsGrid(!isGrid);
  };

  const totalResults = useSearchStore((s) => s.totalResults);
  const setTotalResults = useSearchStore((s) => s.setTotalResults);

  useEffect(() => {
    setTotalResults(filteredCars.length);
  }, [filteredCars]);

  return (
    <Container>
      <Breadcrumbs />
      <ActiveFilterList totalResults={totalResults} />
      <div className={styles.contentWrap}>
        <CarFilterBlock />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            width: "100%",
          }}
        >
          <ChangeGridButton isGrid={isGrid} toggleGrid={toggleGrid} />
          <FilteredCarList cars={filteredCars} isGrid={isGrid} />
        </div>
      </div>
    </Container>
  );
}
