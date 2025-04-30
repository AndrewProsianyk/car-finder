import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCarStore = create(
  persist(
    (set, get) => ({
      cars: [],
      loading: false,
      error: null,

      fetchCars: async () => {
        set({ loading: true, error: null });

        try {
          const response = await fetch("/carsData.json");
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const newData = await response.json();
          const existingCars = get().cars;

          const mergedData = newData.map((newCar) => {
            const existing = existingCars.find((c) => c.id === newCar.id);
            return existing
              ? { ...newCar, favorite: existing.favorite ?? false }
              : { ...newCar, favorite: false };
          });

          set({
            cars: mergedData,
            loading: false,
          });
        } catch (err) {
          set({ error: err.message, loading: false });
          console.error(err);
        }
      },

      toggleFavorite: (id) => {
        const updatedCars = get().cars.map((car) =>
          car.id === id ? { ...car, favorite: !car.favorite } : car
        );

        set({ cars: updatedCars });
      },

      getCarById: (id) => {
        return get().cars.find((car) => car.id === Number(id));
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
  useCarStore((state) => state.cars.find((car) => car.id === Number(id)));
