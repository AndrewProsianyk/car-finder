import { useParams } from "react-router-dom";
import Breadcrumbs from "../../components/breadCrumbs/Breadcrumbs";

import Container from "../../components/container/Container";
import styles from "./CarPage.module.scss";
import ShareButton from "../../components/shareButton/ShareButton";
import FavoriteButton from "../../components/favoriteButton/FavoriteButton";
import RecommendedCarsList from "../../components/recommendedCarsList/RecommendedCarsList";
import SideInfoBlock from "../../components/sideInfoBlock/SideInfoBlock";
import {
  useCarStore,
  useToggleFavorite,
  useChosenCar,
} from "../../stores/carStore";
import { useEffect } from "react";
import CarInfoBlock from "../../components/CarInfoBlock/CarInfoBlock";

export default function CarPage() {
  const { id } = useParams();

  const cars = useCarStore((state) => state.cars);
  const loading = useCarStore((state) => state.loading);
  const fetchCars = useCarStore((state) => state.fetchCars);
  const toggleFavorite = useToggleFavorite();
  const car = useChosenCar(id);

  useEffect(() => {
    if (cars.length === 0) {
      fetchCars();
    }
  }, [cars, fetchCars]);

  if (loading || !car) return <p>Loading car...</p>;

  return (
    <Container>
      <Breadcrumbs />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: "24px",
        }}
      >
        <div className={styles.titleWrap}>
          <h1 className={styles.carTitle}>{car.title}</h1>
          <span className={styles.carYear}>({car.year})</span>
        </div>
        <div className={styles.titleButtons}>
          <ShareButton />
          <FavoriteButton
            isFavorite={car.favorite}
            onClick={() => toggleFavorite(car.id)}
          />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row", gap: "24px" }}>
        <CarInfoBlock car={car} />
        <SideInfoBlock car={car} />
      </div>
      <RecommendedCarsList />
    </Container>
  );
}
