import styles from "./MakesLogoSection.module.scss";
import { MakesLogoIcons } from "../../assets/icons/car-makes/makesLogoIcons";
import Container from "../container/Container";
import useCheckScreenWidth from "../../hooks/useCheckScreenWidth";
import Slider from "../slider/Slider";

export default function MakesLogoSection() {
  const { isMobile } = useCheckScreenWidth();
  return (
    <section className={styles.makesSection}>
      <Container>
        {isMobile ? (
          <Slider data={MakesLogoIcons} cardWidth="109px">
            {(Item) => <Item />}
          </Slider>
        ) : (
          <ul className={styles.makesList}>
            {MakesLogoIcons.map((Item, idx) => (
              <li key={idx}>
                <Item />
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
}
