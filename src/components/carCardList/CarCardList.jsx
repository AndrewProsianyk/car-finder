import styles from "./CarCardList.module.scss";

import useCheckScreenWidth from "../../hooks/useCheckScreenWidth";
import Slider from "../slider/Slider";
import CarCard from "../carCard/CarCard";

export default function CarCardList({ data }) {
  const { isMobile, width } = useCheckScreenWidth();

  if (isMobile) {
    return (
      <Slider data={data} cardWidth="343px">
        {(item) => <CarCard car={item} />}
      </Slider>
    );
  }
  if (!isMobile && width < 1160) {
    return (
      <Slider data={data} cardWidth="343px">
        {(item) => <CarCard car={item} />}
      </Slider>
    );
  }
  return (
    <ul className={styles.list}>
      {data.map((item) => (
        <li key={item._id} style={{ width: "306px" }}>
          <CarCard car={item} />
        </li>
      ))}
    </ul>
  );
}
