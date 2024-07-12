import React, { useState, useRef, useEffect } from "react";

//COMPS
import SectionContainer from "../../components/layout/sectionContainer";
import { Ablauf, Details } from "../../components/list";
import { CoverImage } from "../../components/images";

//TYPO
import { H1, H2, P } from "../../components/typography";

//ASSETS
import Kurs from "../../assets/test/kurs2.jpg";

// ANIMATION
import { motion, useInView } from "framer-motion";
import Parallax from "../../components/parallax";
import { fadeIn, slideInFromLeft, slideInFromRight, slideInFromBottom } from "../../animations/variants";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

//HOOKS
import useDimension from "../../hooks/useDimension";

//FUNCTIONS
// import urlFor from "../../functions/urlFor";

// ANIMATION
import ParallaxElement from "../../animations/parallax/parallaxElement";

const CourseList = ({ ablauf, details }) => {
    const parallaxRef2 = useRef(null);

    useEffect(() => {
        // Ensure initial transform is set to neutral
        gsap.set(parallaxRef2.current, { y: 0 });

        const setupParallax = () => {
            gsap.fromTo(
                parallaxRef2.current,
                { y: 0 },
                {
                    y: "-50%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: parallaxRef2.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    },
                }
            );
        };

        // Use requestAnimationFrame to ensure the setup happens after the initial render
        requestAnimationFrame(() => {
            setupParallax();
            ScrollTrigger.refresh();
        });

        return () => {
            // Clean up the ScrollTrigger instance on unmount
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <>
            <SectionContainer klasse="gap-4 2xl:mb-24">
                <div className="col-span-3"></div>
                <motion.div
                    className="col-span-6 h-auto z-10"
                    initial="hidden"
                    whileInView="visible"
                    variants={slideInFromLeft(0.2)}
                    viewport={{ once: false }}
                >
                    <Ablauf data={ablauf}></Ablauf>
                    <div className="xl:h-24"></div>
                    <Details data={details}></Details>
                </motion.div>
                <div
                    ref={parallaxRef2}
                    className=" absolute 3xl:w-[50.6svw] opacity-10  3xl:right-[-10svw] 3xl:top-[6svh]"
                >
                    <CoverImage
                        src={Kurs.src}
                        mobileSrc={Kurs.src}
                        alt="Cover Background"
                        klasse={"absolute "}
                        // style={{ }}
                        className="w-full grayscale !aspect-[9/16] lg:!aspect-[1/1] xl:!aspect-[1033/898]"
                    />
                </div>
                {/* <div
                    ref={parallaxRef2}
                    className="bg-primaryColor-100 absolute 3xl:w-[26.6svw] 3xl:h-[43svh] 3xl:left-[40.9svw] 3xl:top-[14svh]"
                ></div> */}
            </SectionContainer>
        </>
    );
};

export default CourseList;

// data-scroll data-scroll-speed="3"
