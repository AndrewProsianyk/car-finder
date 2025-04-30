import AdditionalInfo from "../additionalInfo/AdditionalInfo";
import CarFeatures from "../carFeatures/CarFeatures";
import CarPageSection from "../carPageSection/CarPageSection";
import CarSpecificationsList from "../carSpecificationsList/CarSpecificationsList";
import PlatformFeatures from "../platformFeatures/PlatformFeatures";
import SellersDescription from "../sellersDescription/SellersDescription";
import styles from "./CarInfoBlock.module.scss";

export default function CarInfoBlock({ car }) {
  return (
    <div className={styles.carInfoBlock}>
      <CarPageSection>
        <div className={styles.imageWrap}>
          <img
            src={car.image}
            alt="Image of chosen car"
            width={"100%"}
            height={"100%"}
            loading="lazy"
          />
        </div>
      </CarPageSection>
      <CarSpecificationsList car={car} />
      <PlatformFeatures />
      <CarFeatures />
      <SellersDescription />
      <div className={styles.line}></div>
      <AdditionalInfo
        published={car.date}
        adNumber={car.id}
        views={car.views}
      />
    </div>
  );
}
