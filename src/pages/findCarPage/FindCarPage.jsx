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
import useCheckScreenWidth from "../../hooks/useCheckScreenWidth";
import FilterButton from "../../components/findCarPage/filterButton/FilterButton";

export default function FindCarPage() {
  const cars = useCarStore((state) => state.cars);
  const filters = useSearchStore((s) => s.filters);
  const getFilteredCars = useSearchStore((s) => s.getFilteredCars);
  const filteredCars = useMemo(() => getFilteredCars(cars), [cars, filters]);
  const totalResults = useSearchStore((s) => s.totalResults);
  const setTotalResults = useSearchStore((s) => s.setTotalResults);
  const { isMobile, width } = useCheckScreenWidth();
  const [isGrid, setIsGrid] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

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
        {isFiltersOpen && (
          <CarFilterBlock
            onClose={() => setIsFiltersOpen(false)}
            variant="absolute"
          />
        )}
        {width > 1000 && <CarFilterBlock />}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {width <= 1000 && (
              <FilterButton onClick={() => setIsFiltersOpen(true)} />
            )}
            {!isMobile && (
              <ChangeGridButton isGrid={isGrid} toggleGrid={toggleGrid} />
            )}
          </div>
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
