import styles from "./CategoryCard.module.scss";

export default function CategoryCard({ img, name }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImageWrap}>
        <img
          src={img}
          width={"100%"}
          height={"100%"}
          loading="lazy"
          alt="category image"
        />
      </div>
      <p className={styles.categoryName}>{name}</p>
    </div>
  );
}
