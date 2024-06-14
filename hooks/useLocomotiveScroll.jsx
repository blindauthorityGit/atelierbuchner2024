// hooks/useLocomotiveScroll.js
import { useEffect } from "react";
import { useMotionValue } from "framer-motion";

export const useLocomotiveScroll = (ref) => {
    const scrollY = useMotionValue(0);

    useEffect(() => {
        if (typeof window === "undefined" || !ref.current) return;

        let scroll;
        import("locomotive-scroll").then((LocomotiveScroll) => {
            scroll = new LocomotiveScroll.default({
                el: ref.current,
                smooth: true,
                smartphone: { smooth: true },
                tablet: { smooth: true },
            });

            scroll.on("scroll", (args) => {
                scrollY.set(args.scroll.y);
            });
        });

        return () => {
            if (scroll) scroll.destroy();
        };
    }, [ref, scrollY]);

    return { scrollY };
};
