import { create } from "zustand";

export const useSearchStore = create((set, get) => ({
  filters: {
    minPrice: null,
    maxPrice: null,
    location: null,
    make: null,
    model: null,
    fuelTypes: [],
    transmissionTypes: [],
    bodyTypes: [],
    yearFrom: null,
    yearTo: null,
    mileageMin: 0,
    mileageMax: 0,
  },
  totalResults: 0,

  setTotalResults: (value) => set((state) => ({ totalResults: value })),

  setFilter: (key, value) =>
    set((state) => ({
      filters: { ...state.filters, [key]: value },
    })),

  getFilteredCars: (cars) => {
    const { filters } = get();

    return cars.filter((car) => {
      if (filters.minPrice && car.price < filters.minPrice) return false;
      if (filters.maxPrice && car.price > filters.maxPrice) return false;
      if (filters.location && car.location !== filters.location.label)
        return false;
      if (
        filters.make &&
        !car.title.toLowerCase().includes(filters.make.label.toLowerCase())
      )
        return false;
      if (
        filters.model &&
        !car.title.toLowerCase().includes(filters.model.label.toLowerCase())
      )
        return false;
      if (filters.yearFrom && car.year < filters.yearFrom) return false;
      if (filters.yearTo && car.year > filters.yearTo) return false;
      if (
        filters.fuelTypes.length > 0 &&
        !filters.fuelTypes.includes(car.fuelType)
      )
        return false;
      if (
        filters.transmissionTypes.length > 0 &&
        !filters.transmissionTypes.includes(car.transmission)
      )
        return false;
      if (
        filters.bodyTypes.length > 0 &&
        !filters.bodyTypes.includes(car.bodyType)
      )
        return false;

      return true;
    });
  },

  resetFilters: () =>
    set({
      filters: {
        minPrice: null,
        maxPrice: null,
        location: null,
        make: null,
        model: null,
        fuelTypes: [],
        transmissionTypes: [],
        bodyTypes: [],
        yearFrom: null,
        yearTo: null,
        mileageMin: 0,
        mileageMax: 0,
      },
    }),
}));
