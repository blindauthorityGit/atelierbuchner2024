import React, { useState, useRef, useEffect } from "react";

//COMPS
import SectionContainer from "../../components/layout/sectionContainer";
//TYPO
import { H1, H2, P } from "../../components/typography";

// ANIMATION
import { motion, useInView } from "framer-motion";
import Parallax from "../../components/parallax";
import { fadeIn, slideInFromLeft, slideInFromRight, slideInFromBottom } from "../../animations/variants";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

//ASSETS
import IntroImg from "../../assets/test/introImg.jpg";

//HOOKS
import useDimension from "../../hooks/useDimension";

//FUNCTIONS
// import urlFor from "../../functions/urlFor";

// ANIMATION
import ParallaxElement from "../../animations/parallax/parallaxElement";

const HighlightText = ({ klasse }) => {
    const parallaxRef3 = useRef(null);

    useEffect(() => {
        // Ensure initial transform is set to neutral
        gsap.set(parallaxRef3.current, { y: 0 });

        const setupParallax = () => {
            gsap.fromTo(
                parallaxRef3.current,
                { y: 0 },
                {
                    y: "-70%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: parallaxRef3.current,
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
            <SectionContainer klasse={`gap-4 xl:gap-12 relative ${klasse} !bg-primaryColor-100 px-4 py-12 lg:py-48`}>
                <motion.div
                    className="col-span-12 lg:col-span-12 flex flex-col items-center justify-center pt-16 h-auto z-10 xl:pr-8 relative xl:pl-36"
                    initial="hidden"
                    whileInView="visible"
                    variants={slideInFromLeft(0.2)}
                    viewport={{ once: true }}
                >
                    <H2 klasse="lg:ml-[-8rem]  z-20 text-center">
                        <div className="">Vielfältige Kunstkurse für</div>
                        <div>jedes Niveau</div>
                    </H2>
                    <P klasse="mb-6 lg:w-2/4">
                        Im Atelier Buchner bieten wir Ihnen ein umfangreiches Kursprogramm, das sich an alle
                        Kunstinteressierten richtet – unabhängig von Ihrem Erfahrungslevel. Jährlich veranstalten wir
                        unsere vier großen Akademien, die speziell darauf ausgelegt sind, Ihre künstlerischen
                        Fähigkeiten zu fördern und weiterzuentwickeln.
                    </P>
                </motion.div>
                <div className="col-span-12 lg:col-span-12 pt-4  flex  justify-center text-center"></div>
                <div
                    ref={parallaxRef3}
                    className="bg-primaryColor-100 absolute top-[12svh] left-[20svw] w-[40svw] h-[25svh] 3xl:w-[10.83svw] 3xl:h-[15svh] 3xl:left-[0] 3xl:top-[22svh]"
                ></div>
            </SectionContainer>
        </>
    );
};

export default HighlightText;

// data-scroll data-scroll-speed="3"
