import { useEffect } from "react";
import { useInitializeScroll } from "./useScrollStore";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useLocomotiveScroll = (ref) => {
    const scrollY = useInitializeScroll();

    useEffect(() => {
        if (typeof window === "undefined" || !ref.current) return;

        const loadScroll = async () => {
            const LocomotiveScroll = (await import("locomotive-scroll")).default;

            if (!ref.current) {
                console.error("No scroll container found");
                return;
            }

            const scroll = new LocomotiveScroll({
                el: ref.current,
                smooth: true,
                multiplier: 1,
                class: "is-inview",
                smartphone: { smooth: true },
                tablet: { smooth: true },
            });

            console.log("Locomotive Scroll initialized", scroll);

            // Sync with GSAP ScrollTrigger
            scroll.on("scroll", (args) => {
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
