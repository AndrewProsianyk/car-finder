import { useMemo, useState } from "react";
import PageSection from "../pageSection/PageSection";
import Pills from "../pills/Pills";
import styles from "./LatestListingsSection.module.scss";
import useCheckScreenWidth from "../../hooks/useCheckScreenWidth";
import CarCardList from "../carCardList/CarCardList";
import { useCars } from "../../stores/carStore";

export default function LatestListingsSection() {
  const [selectedPill, setSelectedPill] = useState("all");
  const { isMobile } = useCheckScreenWidth();

  const cars = useCars();

  const latestCars = useMemo(() => {
    if (!cars || cars.length === 0) return [];

    return [...cars]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 4);
  }, [cars]);

  if (!cars) return <div>Loading...</div>;

  return (
    <div className={styles.wrapper}>
      <PageSection
        style={
          isMobile
            ? {
                flexDirection: "column",
                gap: "16px",
                marginBottom: "0",
              }
            : null
        }
        title="Latest cars"
        buttons={
          <Pills
            selected={selectedPill}
            onChange={setSelectedPill}
            variant="pageLight"
          />
        }
      >
        <CarCardList data={latestCars} />
      </PageSection>
    </div>
  );
}
