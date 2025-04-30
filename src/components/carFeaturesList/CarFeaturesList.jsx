import styles from "./CarFeaturesList.module.scss";

export default function CarFeaturesList({ data }) {
  return (
    <ul className={styles.carFeaturesList}>
      {data.map((item, idx) => (
        <li key={idx} className={styles.featuresListItem}>
          <div className={styles.listDot}></div>
          {item}
        </li>
      ))}
    </ul>
  );
}
