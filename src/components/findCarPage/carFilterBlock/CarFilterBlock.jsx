import clsx from "clsx";
import BodyTypeFilter from "../bodyTypeFilter/BodyTypeFilter";
import FuelTypeFilter from "../fuelTypeFilter/FuelTypeFilter";
import LocationFilter from "../locationFilter/LocationFilter";
import MakeAndModelFilter from "../makeAndModelFilter/MakeAndModelFilter";
import RangeSlider from "../rangeSlider/RangeSlider";
import TransmissionFilter from "../transmissionFilter/TransmissionFilter";
import YearFilter from "../yearFilter/YearFilter";
import styles from "./CarFilterBlock.module.scss";
import CloseFiltersButton from "../closeFiltersButton/CloseFiltersButton";
import useCheckScreenWidth from "../../../hooks/useCheckScreenWidth";

export default function CarFilterBlock({
  onClose = null,
  variant = "default",
}) {
  const { width } = useCheckScreenWidth();
  return (
    <div className={clsx(styles.filterBlockWrap, styles[variant])}>
      <LocationFilter />
      <BodyTypeFilter />
      <YearFilter />
      <MakeAndModelFilter />
      <RangeSlider />
      <FuelTypeFilter />
      <TransmissionFilter />
      {width <= 1000 && <CloseFiltersButton onClose={onClose} />}
    </div>
  );
}
