// store.js
import create from "zustand";

const useStore = create((set) => ({
    scrollY: 0,
    setScrollY: (value) => set({ scrollY: value }),

    updateMenuBarClass: (addClass) =>
        set((state) => {
            console.log(addClass);
            // Implement logic to add or remove classes from the menu bar
            // This could be as simple as toggling a boolean or updating a string/array of classes
        }),

    isDark: false,
    setIsDark: (show) => set({ isDark: show }),

    formData: {},
    setFormData: (data) => set((state) => ({ formData: { ...state.formData, ...data } })),
}));

export default useStore;
