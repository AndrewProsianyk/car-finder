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
import GoToTopButton from "../../components/findCarPage/goToTopButton/GoToTopButton";
import PaginationControls from "../../components/findCarPage/paginationControls/PaginationControls";
import { ITEMS_PER_PAGE } from "../../constants";

export default function FindCarPage() {
  const cars = useCarStore((state) => state.cars);
  const filters = useSearchStore((s) => s.filters);
  const getFilteredCars = useSearchStore((s) => s.getFilteredCars);
  const filteredCars = useMemo(() => getFilteredCars(cars), [cars, filters]);
  const [isGrid, setIsGrid] = useState(false);
  const totalResults = useSearchStore((s) => s.totalResults);
  const setTotalResults = useSearchStore((s) => s.setTotalResults);
  const [currentPage, setCurrentPage] = useState(1);

  const totalNumberOfPages = totalResults / ITEMS_PER_PAGE;

  const carsSliced =
    filteredCars?.slice(
      currentPage * ITEMS_PER_PAGE - ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
    ) || [];

  const toggleGrid = () => {
    setIsGrid(!isGrid);
  };

  const handleChangePage = (direction) => {
    if (direction === "next") {
      setCurrentPage((prev) => prev + 1);
    } else if (direction === "previous") {
      setCurrentPage((prev) => prev - 1);
    }
  };

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
          <FilteredCarList cars={carsSliced} isGrid={isGrid} />
          <PaginationControls
            onClick={handleChangePage}
            page={currentPage}
            totalNumberOfPages={totalNumberOfPages}
          />
        </div>
      </div>
      <GoToTopButton />
    </Container>
  );
}
