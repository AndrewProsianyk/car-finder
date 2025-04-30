import styles from "./CarPageSection.module.scss";

export default function CarPageSection({ children, title = null }) {
  return (
    <section className={styles.section}>
      {title && <h3 className={styles.subtitle}>{title}</h3>}
      {children}
    </section>
  );
}
