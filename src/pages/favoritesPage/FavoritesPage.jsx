import CarCard from "../../components/carCard/CarCard";
import Container from "../../components/container/Container";
import styles from "./FavoritesPage.module.scss";
import { useCarStore } from "../../stores/carStore";

export default function FavoritesPage() {
  const { getFavorites } = useCarStore();
  const favorites = getFavorites();

  return (
    <Container>
      <div className={styles.favoritesPage}>
        <h1>Favorite cars</h1>
        {favorites.length === 0 ? (
          <p>You have no favorite cars.</p>
        ) : (
          <ul className={styles.carsList}>
            {favorites.map((car) => (
              <li className={styles.listItem} key={car._id}>
                <CarCard car={car} variant="big" />
              </li>
            ))}
          </ul>
        )}
      </div>
    </Container>
  );
}
