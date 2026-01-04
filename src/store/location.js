import {create} from "zustand/react";
import {immer} from "zustand/middleware/immer";
import {locations} from "#constants/index.js";

const DEFAULT_LOCATION = locations.work;

const useLocationStore = create(immer((set) => ({
    activeLocation: DEFAULT_LOCATION,

    setActiveLocation: (location = null) => set((state) => {
        state.activeLocation = location;
    }),

    resetActiveLocation: () => set((state) => {
        state.activeLocation = DEFAULT_LOCATION;
    }),
  })),
);

export default useLocationStore;