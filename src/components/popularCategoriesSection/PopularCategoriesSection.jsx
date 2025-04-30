import styles from "./PopularCategoriesSection.module.scss";

import CategoriesList from "../categoriesList/CategoriesList";
import PageSection from "../pageSection/PageSection";

const categoriesData = [
  {
    name: "Electric cars",
    img: "/images/categories/electric.png",
  },
  {
    name: "New cars",
    img: "/images/categories/new.png",
  },
  {
    name: "City cars",
    img: "/images/categories/city.png",
  },
  {
    name: "Off-road cars",
    img: "/images/categories/off-road.png",
  },
  {
    name: "Family cars",
    img: "/images/categories/family.png",
  },
];

export default function PopularCategoriesSection() {
  return (
    <div className={styles.wrapper}>
      <PageSection title="Currently in demand">
        <CategoriesList data={categoriesData} />
      </PageSection>
    </div>
  );
}
