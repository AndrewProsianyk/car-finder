import styles from "./AccessoryCard.module.scss";

export default function AccessoryCard({ img, text }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrap}>
        <img
          src={img}
          alt="Accessory image"
          width={"100%"}
          height={"100%"}
          loading="lazy"
        />
      </div>
      <p className={styles.cardText}>{text}</p>
    </div>
  );
}
