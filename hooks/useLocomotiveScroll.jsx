// hooks/useLocomotiveScroll.js
import { useEffect } from "react";
import { useMotionValue } from "framer-motion";

export const useLocomotiveScroll = (ref) => {
    const scrollY = useMotionValue(0);

    useEffect(() => {
        if (typeof window === "undefined" || !ref.current) return;

        const loadScroll = async () => {
            const LocomotiveScroll = (await import("locomotive-scroll")).default;
            const scroll = new LocomotiveScroll({
                el: ref.current,
                smooth: true,
                lerp: 0.1,
                multiplier: 1,
                class: "is-inview",
                offset: [0, 0],
                reloadOnContextChange: true,
                smartphone: { smooth: true },
                tablet: { smooth: true },
            });

            scroll.on("scroll", (args) => {
                console.log("scrollY:", args.scroll.y); // Add console log here

                scrollY.set(args.scroll.y);
            });

            return () => {
                if (scroll) scroll.destroy();
            };
        };

        loadScroll();
    }, [ref, scrollY]);

    return { scrollY };
};
