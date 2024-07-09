import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsapAnimation = (setupAnimations) => {
    useEffect(() => {
        setupAnimations(gsap, ScrollTrigger);
    }, [setupAnimations]);
};
