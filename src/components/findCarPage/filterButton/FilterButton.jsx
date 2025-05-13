import styles from "./FilterButton.module.scss";

export default function FilterButton({ onClick }) {
  return (
    <button className={styles.filterBtn} onClick={() => onClick()}>
      <span>Filters</span>
    </button>
  );
}
