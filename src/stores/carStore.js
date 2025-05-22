import { create } from "zustand";
import { persist } from "zustand/middleware";
import { BACKEND_URL } from "../constants";

export const useCarStore = create(
  persist(
    (set, get) => ({
      cars: [],
      loading: false,
      error: null,

      fetchCars: async () => {
        set({ loading: true, error: null });

        try {
          const response = await fetch(`${BACKEND_URL}/api/cars`);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const newData = await response.json();

          set({
            cars: newData,
            loading: false,
          });
        } catch (err) {
          set({ error: err.message, loading: false });
          console.error(err);
        }
      },

      toggleFavorite: async (id) => {
        const car = get().cars.find((car) => car._id === id);
        if (!car) return;

        const newFavorite = !car.favorite;

        try {
          const response = await fetch(
            `${BACKEND_URL}/api/cars/${id}/favorite`,
            {
              method: "PATCH",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ favorite: newFavorite }),
            }
          );
          if (!response.ok) throw new Error("Network error");
          const updatedCar = await response.json();

          // Оновлюємо авто у локальному масиві
          const updatedCars = get().cars.map((car) =>
            car._id === id ? updatedCar : car
          );
          set({ cars: updatedCars });
        } catch (err) {
          set({ error: err.message });
          console.error(err);
        }
      },

      getFavorites: () => {
        return get().cars.filter((car) => car.favorite);
      },

      getCarById: (id) => {
        return get().cars.find((car) => car._id === id);
      },
    }),
    {
      name: "cars-storage",
    }
  )
);

export const useCars = () => useCarStore((state) => state.cars);

export const useLoading = () => useCarStore((state) => state.loading);
export const useFetchCars = () => useCarStore((state) => state.fetchCars);
export const useToggleFavorite = () =>
  useCarStore((state) => state.toggleFavorite);
export const useGetCarById = () => useCarStore((state) => state.getCarById);
export const useChosenCar = (id) =>
  useCarStore((state) => state.cars.find((car) => car._id === id));
