import { useEffect, useState } from "react";

export default function useFetchCars() {
  const [cars, setCars] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [recommendedCars, setRecommendedCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch("/carsData.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCars(data);
        setRecommendedCars(getRandomCars(data, 4));
      } catch (error) {
        setError(error.message);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  const getRandomCars = (carsList, num) => {
    const shuffled = [...carsList].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  return { cars, loading, error, recommendedCars };
}
