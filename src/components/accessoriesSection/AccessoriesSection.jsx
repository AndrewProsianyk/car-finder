import ArrowRight from "../../assets/icons/ArrowRight";
import AccessoriesList from "../accessoriesList/AccessoriesList";

import Button from "../button/Button";
import Container from "../container/Container";
import styles from "./AccessoriesSection.module.scss";

const accessoriesData = [
  {
    img: "/images/accessories/tires.png",
    text: "Tires",
  },
  {
    img: "/images/accessories/disks.png",
    text: "Disks",
  },
  {
    img: "/images/accessories/tuning.png",
    text: "Tuning",
  },
  {
    img: "/images/accessories/child-seat.png",
    text: "Child seat",
  },
];

export default function AccessoriesSection() {
  return (
    <div className={styles.section}>
      <Container>
        <div className={styles.contentWrap}>
          <div className={styles.textWrap}>
            <h3 className={styles.sectionTitle}>Auto market</h3>
            <p className={styles.sectionSubtitle}>
              Choose the best for your car!
            </p>
            <Button iconRight={<ArrowRight color="#ffffff" />}>
              Go to shop
            </Button>
          </div>
          <AccessoriesList data={accessoriesData} />
        </div>
      </Container>
    </div>
  );
}
