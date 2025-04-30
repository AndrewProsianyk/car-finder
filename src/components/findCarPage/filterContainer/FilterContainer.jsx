import styles from "./FilterContainer.module.scss";

export default function FilterContainer({ title, children }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      {children}
    </div>
  );
}
