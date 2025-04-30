import styles from "./BodyTypeList.module.scss";
import BodyTypeCard from "../bodyTypeCard/BodyTypeCard";
import useCheckScreenWidth from "../../hooks/useCheckScreenWidth";
import Slider from "../slider/Slider";

export default function BodyTypeList({ data }) {
  const isMobile = useCheckScreenWidth();

  if (isMobile) {
    return (
      <Slider data={data} cardWidth="164px">
        {(item) => (
          <BodyTypeCard
            icon={item.icon}
            type={item.type}
            totalOffers={item.totalOffers}
          />
        )}
      </Slider>
    );
  }

  return (
    <ul className={styles.list}>
      {data?.map((item) => {
        return (
          <li key={item.type}>
            <BodyTypeCard
              icon={item.icon}
              type={item.type}
              totalOffers={item.totalOffers}
            />
          </li>
        );
      })}
    </ul>
  );
}
