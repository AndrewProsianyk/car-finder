import styles from "./AdditionalInfo.module.scss";

export default function AdditionalInfo({ published, adNumber, views }) {
  return (
    <ul className={styles.infoList}>
      <li className={styles.infoListItem}>
        Published: <span>{published}</span>
      </li>

      <li className={styles.infoListItem}>
        Ad number: <span>{adNumber}</span>
      </li>

      <li className={styles.infoListItem}>
        Views: <span>{views ? views : 48}</span>
      </li>
    </ul>
  );
}
