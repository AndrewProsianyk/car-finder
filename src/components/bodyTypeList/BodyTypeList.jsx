import styles from "./BodyTypeList.module.scss";
import BodyTypeCard from "../bodyTypeCard/BodyTypeCard";
import useCheckScreenWidth from "../../hooks/useCheckScreenWidth";
import Slider from "../slider/Slider";

export default function BodyTypeList({ data }) {
  const { isMobile, isTablet, width } = useCheckScreenWidth();

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

  if (!isMobile && width < 1230) {
    return (
      <Slider data={data} cardWidth="188px">
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

  if (width >= 1230) {
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
}
