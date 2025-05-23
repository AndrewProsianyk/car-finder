import styles from "./AccessoriesList.module.scss";

import useCheckScreenWidth from "../../hooks/useCheckScreenWidth";
import AccessoryCard from "../accessoryCard/AccessoryCard";
import Slider from "../slider/Slider";

export default function AccessoriesList({ data }) {
  const { isMobile, width } = useCheckScreenWidth();

  if (isMobile) {
    return (
      <Slider data={data} cardWidth="143px">
        {(item) => <AccessoryCard img={item.img} text={item.text} />}
      </Slider>
    );
  }

  if (!isMobile && width < 1060) {
    return (
      <Slider data={data} cardWidth="164px">
        {(item) => <AccessoryCard img={item.img} text={item.text} />}
      </Slider>
    );
  }

  return (
    <ul className={styles.accessoriesList}>
      {data.map((item, idx) => (
        <li key={idx}>
          <AccessoryCard img={item.img} text={item.text} />
        </li>
      ))}
    </ul>
  );
}
