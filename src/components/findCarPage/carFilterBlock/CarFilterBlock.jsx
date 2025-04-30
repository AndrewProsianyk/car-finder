import BodyTypeFilter from "../bodyTypeFilter/BodyTypeFilter";
import FuelTypeFilter from "../fuelTypeFilter/FuelTypeFilter";
import LocationFilter from "../locationFilter/LocationFilter";
import MakeAndModelFilter from "../makeAndModelFilter/MakeAndModelFilter";
import MileageFilter from "../mileageFilter/MileageFilter";
import RangeSlider from "../rangeSlider/RangeSlider";
import TransmissionFilter from "../transmissionFilter/TransmissionFilter";
import YearFilter from "../yearFilter/YearFilter";
import styles from "./CarFilterBlock.module.scss";

export default function CarFilterBlock() {
  return (
    <div className={styles.filterBlockWrap}>
      <LocationFilter />
      <BodyTypeFilter />
      <YearFilter />
      <MakeAndModelFilter />
      <RangeSlider />
      <FuelTypeFilter />
      <TransmissionFilter />
      {/* <MileageFilter /> */}
    </div>
  );
}
