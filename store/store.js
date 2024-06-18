// store.js
import create from "zustand";

const useStore = create((set) => ({
    scrollY: 0,
    setScrollY: (value) => set({ scrollY: value }),
}));

export default useStore;
