import clsx from "clsx";
import styles from "./CarCard.module.scss";
import { Link } from "react-router-dom";
import CarBasicInfoList from "../carBasicInfo/CarBasicInfo";
import CarTags from "../carTags/CarTags";
import FavoriteButton from "../favoriteButton/FavoriteButton";
import { useToggleFavorite } from "../../stores/carStore";

export default function CarCard({ car, variant = "default-m" }) {
  const toggleFavorite = useToggleFavorite();
  if (!car) return <div>Loading...</div>;

  return (
    <Link
      to={`/car/${car._id}`}
      className={`${styles.card} ${styles[variant]}`}
    >
      <div
        className={clsx(styles.cardImage, styles[variant])}
        style={{
          backgroundImage: car.image
            ? `url(${car.image})`
            : 'url("/images/defaultCarImage.png")',
        }}
      >
        <CarTags condition={car.condition} verified={car.verified} />
      </div>
      <div className={styles.cardContentWrap}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "5px",
          }}
        >
          <span className={styles.date}>{car.date}</span>
          <FavoriteButton
            variant="smaller"
            isFavorite={car.favorite}
            onClick={() => toggleFavorite(car._id)}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "8px",
          }}
        >
          <h3 className={styles.title}>{car.title}</h3>
          <span className={styles.year}>({car.year})</span>
        </div>
        <span className={styles.price}>$ {car.price}</span>
        {variant === "horizontal-l" ? (
          <p style={{ marginTop: "12px" }}>
            This car lorem ipsum dolor sit amet consectetur adipisicing elit.
            Fugiat optio est incidunt corporis a quasi velit.
          </p>
        ) : null}
        <div className={styles.line}></div>
        <CarBasicInfoList
          location={car.location}
          fuelType={car.fuelType}
          mileage={car.mileage}
          transmission={car.transmission}
          variant={variant}
        />
      </div>
    </Link>
  );
}
