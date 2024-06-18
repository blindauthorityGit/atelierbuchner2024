// sections/BioOverview.js
import React, { forwardRef, useEffect } from "react";
import { motion, useTransform, useAnimation, motionValue } from "framer-motion";

// COMPS
import SectionContainer from "../../components/layout/SectionContainer";

// ANIMATION
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//STORE
import useStore from "../../store/store"; // Import the Zustand store

const BioOverview = forwardRef((props, ref) => {
    const scrollYValue = useStore((state) => state.scrollY);
    const scrollY = motionValue(scrollYValue);
    const controls = useAnimation();
    // Interpolate background color based on scrollY value
    const backgroundColor = useTransform(scrollY, [0, 4000], ["#ffffff", "#000000"]);

    // useEffect(() => {
    //     console.log(scrollYValue);
    //     scrollY.set(scrollYValue);
    // }, [scrollYValue, scrollY]);

    // useEffect(() => {
    //     console.log(scrollY);
    // }, [scrollY]);
    // // Animate elements when the background is fully dark
    // // Animate elements when the background is fully dark
    // useEffect(() => {
    //     if (scrollYValue >= 3000) {
    //         controls.start({
    //             opacity: 1,
    //             y: 0,
    //             transition: { duration: 1 },
    //         });
    //     } else {
    //         controls.start({ opacity: 0, y: 50 });
    //     }
    // }, [scrollYValue, controls]);

    // Use effect to trigger animations when the element is in view
    useEffect(() => {
        const element = document.querySelector(".bioOverview");
        const handleScroll = () => {
            console.log(element, "moop");
            if (element.classList.contains("is-inview")) {
                console.log("BIN DA");
                controls.start({
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1 },
                });
            } else {
                controls.start({ opacity: 0, y: 50 });
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <SectionContainer fullHeight data-scroll-section ref={ref}>
            <motion.div
                className="w-full h-full col-span-12 bioOverview"
                // style={{ backgroundColor }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                data-scroll
            >
                <motion.img
                    src="path_to_image.jpg"
                    alt="Description"
                    className="image max-w-full mb-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                />
                <motion.div className="text text-white" initial={{ opacity: 0, y: 50 }} animate={controls}>
                    <h1 className="text-4xl font-bold">Title</h1>
                    <p className="text-xl">Description text goes here...</p>
                </motion.div>
            </motion.div>
        </SectionContainer>
    );
});

export default BioOverview;
