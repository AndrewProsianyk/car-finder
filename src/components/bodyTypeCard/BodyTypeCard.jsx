import useCheckScreenWidth from "../../hooks/useCheckScreenWidth";
import styles from "./BodyTypeCard.module.scss";

export default function BodyTypeCard({ icon: Icon, type, totalOffers }) {
  const { isMobile, isTablet } = useCheckScreenWidth();
  return (
    <div className={styles.card}>
      <Icon />
      <div>
        <p className={styles.typeText}>{type}</p>
        <p className={styles.totalOffersText}>{totalOffers} offers</p>
      </div>
    </div>
  );
}
