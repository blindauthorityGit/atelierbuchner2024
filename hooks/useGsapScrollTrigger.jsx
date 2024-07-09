// hooks/useGsapScrollTrigger.js
import { useEffect } from "react";

const useGsapScrollTrigger = (setupAnimations) => {
    useEffect(() => {
        const scrollEl = document.querySelector("#main-container");

        const setupScrollTrigger = async () => {
            const gsap = (await import("gsap")).default;
            const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;

            gsap.registerPlugin(ScrollTrigger);

            ScrollTrigger.scrollerProxy(scrollEl, {
                scrollTop(value) {
                    return arguments.length ? scrollEl.scrollTo(value, 0) : scrollEl.scrollTop;
                },
                getBoundingClientRect() {
                    return {
                        top: 0,
                        left: 0,
                        width: window.innerWidth,
                        height: window.innerHeight,
                    };
                },
                pinType: scrollEl.style.transform ? "transform" : "fixed",
            });

            setupAnimations(gsap, ScrollTrigger);

            ScrollTrigger.addEventListener("refresh", () => scrollEl.update());
            ScrollTrigger.refresh();

            return () => {
                ScrollTrigger.removeEventListener("refresh", () => scrollEl.update());
            };
        };

        let cleanupFunction;

        setupScrollTrigger().then((cleanup) => {
            cleanupFunction = cleanup;
        });

        return () => {
            if (cleanupFunction) cleanupFunction();
        };
    }, [setupAnimations]);
};

export default useGsapScrollTrigger;
