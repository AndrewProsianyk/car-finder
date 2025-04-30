import CarCardGrid from "../carCardGrid/CarCardGrid";
import PageSection from "../pageSection/PageSection";
import ViewAllLink from "../viewAllLink/ViewAllLink";
import styles from "./TopOffersSection.module.scss";

export default function TopOffersSection() {
  return (
    <div className={styles.wrapper}>
      <PageSection title="Top offers" buttons={<ViewAllLink />}>
        <CarCardGrid />
      </PageSection>
    </div>
  );
}
