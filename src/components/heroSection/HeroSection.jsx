import Container from "../container/Container";
import GoogleRateBlock from "../googleRateBlock/GoogleRateBlock";
import HeroSearchForm from "../heroSearchForm/HeroSearchForm";
import styles from "./HeroSection.module.scss";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <Container>
        <div className={styles.mainContentWrap}>
          <div className={styles.titleWrap}>
            <h1 className={styles.heroTitle}>Easy way to find the right car</h1>
            <GoogleRateBlock />
          </div>
          <HeroSearchForm />
        </div>
        <p className={styles.heroBottomText}>
          Finder is a <b>leading digital marketplace</b> for the automotive
          industry.
        </p>
      </Container>
    </section>
  );
}
