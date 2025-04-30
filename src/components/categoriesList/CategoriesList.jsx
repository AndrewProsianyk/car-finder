import useCheckScreenWidth from "../../hooks/useCheckScreenWidth";
import CategoryCard from "../categoryCard/CategoryCard";
import Slider from "../slider/Slider";
import styles from "./CategoriesList.module.scss";

export default function CategoriesList({ data }) {
  const isMobile = useCheckScreenWidth();

  if (isMobile) {
    return (
      <Slider data={data} cardWidth="160px">
        {(item) => <CategoryCard img={item.img} name={item.name} />}
      </Slider>
    );
  }
  return (
    <ul className={styles.list}>
      {data?.map((item, idx) => {
        return (
          <li key={idx}>
            <CategoryCard img={item.img} name={item.name} />
          </li>
        );
      })}
    </ul>
  );
}
