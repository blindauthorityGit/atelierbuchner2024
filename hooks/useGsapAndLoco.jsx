// import { useEffect } from "react";
// import { useInitializeScroll } from "./useScrollStore";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/dist/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export const useGsapAndLoco = (ref, setupAnimations) => {
//     const scrollY = useInitializeScroll();

//     useEffect(() => {
//         if (typeof window === "undefined" || !ref.current) return;

//         const loadScroll = async () => {
//             const LocomotiveScroll = (await import("locomotive-scroll")).default;

//             if (!ref.current) {
//                 console.error("No scroll container found");
//                 return;
//             }

//             const scroll = new LocomotiveScroll({
//                 el: ref.current,
//                 smooth: true,
//                 multiplier: 1,
//                 class: "is-inview",
//                 smartphone: { smooth: true },
//                 tablet: { smooth: true },
//             });

//             console.log("Locomotive Scroll initialized", scroll);

//             // Sync with GSAP ScrollTrigger
//             ScrollTrigger.scrollerProxy(ref.current, {
//                 scrollTop(value) {
//                     return arguments.length ? scroll.scrollTo(value, 0) : scroll.scroll.instance.scroll.y;
//                 },
//                 getBoundingClientRect() {
//                     return {
//                         top: 0,
//                         left: 0,
//                         width: window.innerWidth,
//                         height: window.innerHeight,
//                     };
//                 },
//                 pinType: ref.current.style.transform ? "transform" : "fixed",
//             });

//             scroll.on("scroll", ScrollTrigger.update);

//             ScrollTrigger.addEventListener("refresh", () => scroll.update());
//             ScrollTrigger.refresh();

//             setupAnimations(gsap, ScrollTrigger);

//             // Sync with useInitializeScroll
//             scroll.on("scroll", (args) => {
//                 scrollY.set(args.scroll.y);
//             });

//             return () => {
//                 if (scroll) scroll.destroy();
//                 ScrollTrigger.removeEventListener("refresh", () => scroll.update());
//             };
//         };

//         loadScroll();
//     }, [ref, scrollY, setupAnimations]);

//     return { scrollY };
// };
