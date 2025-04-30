import clsx from "clsx";
import FavoriteIcon from "../../assets/icons/FavoriteIcon";
import styles from "./FavoriteButton.module.scss";

export default function FavoriteButton({
  isFavorite,
  onClick,
  variant = "bigger",
}) {
  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    onClick?.();
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      className={clsx(styles.favButton, styles[variant], {
        [styles.favorite]: isFavorite,
      })}
      aria-label="Add to favorite"
    >
      <FavoriteIcon color={isFavorite ? "#fff" : "#333D4C"} />
    </button>
  );
}
