import styles from "./CarPrice.module.scss";

export default function CarPrice({ price }) {
  return <span className={styles.price}>$ {price}</span>;
}
