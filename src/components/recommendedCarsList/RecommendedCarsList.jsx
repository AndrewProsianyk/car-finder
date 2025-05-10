import { useEffect, useMemo, useState } from "react";
import { useCarStore } from "../../stores/carStore";
import CarCardList from "../carCardList/CarCardList";
import PageSection from "../pageSection/PageSection";
import ViewAllLink from "../viewAllLink/ViewAllLink";

export default function RecommendedCarsList() {
  const cars = useCarStore((state) => state.cars);
  const fetchCars = useCarStore((state) => state.fetchCars);
  const [recommendedIds, setRecommendedIds] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      if (cars.length === 0) {
        await fetchCars();
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    if (cars.length && recommendedIds.length === 0) {
      const shuffled = [...cars].sort(() => 0.5 - Math.random());
      const ids = shuffled.slice(0, 4).map((car) => car._id);
      setRecommendedIds(ids);
    }
  }, [cars]);

  const recommendedCars = useMemo(() => {
    return recommendedIds
      .map((id) => cars.find((car) => car._id === id))
      .filter(Boolean);
  }, [recommendedIds, cars]);

  return (
    <PageSection
      title="You may be interested in"
      noPadding
      buttons={<ViewAllLink />}
    >
      <CarCardList data={recommendedCars} />
    </PageSection>
  );
}
