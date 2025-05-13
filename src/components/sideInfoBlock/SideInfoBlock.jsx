import CarBasicInfoList from "../carBasicInfo/CarBasicInfo";
import CarPrice from "../carPrice/CarPrice";
import CarTags from "../carTags/CarTags";
import SellerCard from "../sellerCard/SellerCard";
import SubscriptionBlock from "../subscriptionBlock/SubscriptionBlock";
import styles from "./SideInfoBlock.module.scss";

export default function SideInfoBlock({ car }) {
  return (
    <div className={styles.sideInfoBlock}>
      <CarTags condition={car.condition} verified={car.verified} />
      <CarPrice price={car.price} />
      <CarBasicInfoList
        location={car.location}
        fuelType={car.fuelType}
        mileage={car.mileage}
        transmission={car.transmission}
      />
      <SellerCard />
      {/* <SubscriptionBlock /> */}
    </div>
  );
}
