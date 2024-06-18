// hooks/useScrollStore.js
import { useEffect } from "react";
import create from "zustand";
import { useMotionValue } from "framer-motion";

const useScrollStore = create((set) => ({
    scrollY: 0,
    setScrollY: (value) => set({ scrollY: value }),
}));

export const useInitializeScroll = () => {
    const scrollY = useMotionValue(0);
    const setScrollY = useScrollStore((state) => state.setScrollY);

    useEffect(() => {
        setScrollY(scrollY);
    }, [scrollY, setScrollY]);

    return scrollY;
};

export default useScrollStore;
