import CarPageSection from "../carPageSection/CarPageSection";
import styles from "./SellersDescription.module.scss";

export default function SellersDescription() {
  return (
    <CarPageSection title="Seller's description">
      <p className={styles.description}>
        This stunning convertible blends luxury with performance, featuring a
        sleek design, advanced technology, and a powerful engine. Enjoy open-air
        driving with premium comfort and the unmistakable elegance of
        Mercedes-Benz. Impeccably maintained and ready to provide an
        exhilarating driving experience. Don’t miss out on this exceptional
        vehicle.
      </p>
    </CarPageSection>
  );
}
