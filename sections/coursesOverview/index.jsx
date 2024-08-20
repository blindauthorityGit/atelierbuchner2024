import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
//COMPS
import MainHero from "../../components/hero/mainHero";
import SectionContainer from "../../components/layout/sectionContainer";
import { CatCard } from "../../components/cards";
import { MainButton, GhostButton, TextButton } from "../../components/buttons";
import { HeroElement } from "../../components/swiper";
//TYPO
import { H1, H2, H3, H4, P } from "../../components/typography";
//ASSETS
import Hero2 from "../../assets/test/kurs3.jpg";
import Hero3 from "../../assets/test/hero3.jpg";
import Hero4 from "../../assets/test/hero4.jpg";
import Hero5 from "../../assets/test/hero5.jpg";
import Hero6 from "../../assets/test/hero6.jpg";
import Chevron from "../../assets/icons/chevron.svg";
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

//HOOKS
import useDimension from "../../hooks/useDimension";

//FUNCTIONS
// import urlFor from "../../functions/urlFor";

// ANIMATION
import ParallaxElement from "../../animations/parallax/parallaxElement";

const CoursesOverview = ({ noBtn }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const [data, setDate] = useState([Hero2, Hero3, Hero4, Hero5]);

    const { width } = useDimension();

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(width <= 420);
        console.log(width <= 420);
    }, [width]);

    const handleHoverStart = (index) => {
        setHoveredIndex(index);
    };

    const handleHoverEnd = () => {
        setHoveredIndex(null);
    };

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
            <SectionContainer klasse="gap-4 bg-primaryColor-50 z-20 grid-rows-[auto_1fr] px-4 lg:px-0 py-12 lg:py-36 pt-12 lg:pt-48 3xl:pb-20 4xl:pb-48">
                <motion.div
                    className="col-span-12 lg:col-span-6 h-auto z-10"
                    initial="hidden"
                    whileInView="visible"
                    variants={slideInFromLeft(0.2)}
                    viewport={{ once: true }}
                >
                    <H2 klasse="">
                        <span className="">Akademien im Zyklus</span>
                        <br />
                        <span>der Jahreszeiten</span>
                    </H2>
                </motion.div>
                <div className="col-span-12 lg:col-span-6 hidden lg:block h-auto z-10">
                    <P>
                        Lorem ipsum dolor sit amet consectetur. Risus eget eleifend porttitor quis mattis tellus. Sed
                        ultrices cras lectus rhoncus. Dui convallis neque nulla tortor pellentesque quis scelerisque.
                        Elementum vitae eget pharetra dui adipiscing auctor. Sit nulla tristique natoque convallis
                        venenatis. Sed elit donec tellus vitae mattis odio sed. Bibendum varius nullam facilisis iaculis
                        interdum.
                    </P>
                </div>
                <div className="lg:px-24 grid grid-cols-12 col-span-12 lg:gap-8 z-10 bg-primaryColor-50">
                    {data.map((e, i) =>
                        isMobile ? (
                            // Render without animation on mobile
                            <div key={i} className="col-span-12 lg:col-span-3 z-10 mb-8 lg:mb-0">
                                <CatCard
                                    klasse="col-span-12 z-10 !h-[30svh] 2xl:!h-[42svh]"
                                    title="TEST"
                                    subline="test"
                                    image={e.src}
                                />
                                <H3 klasse="!mb-0 mt-2 lg:mt-4">Sommerakademie</H3>
                                <div className="w-full">
                                    <div className="left">
                                        <P klasse="font-bold">01.-05.02.2024</P>
                                    </div>
                                    <div className="right mt-2">
                                        <P>Faszination Pigmente</P>
                                    </div>
                                    <TextButton link="">Infos & Anmeldung</TextButton>
                                </div>
                            </div>
                        ) : (
                            // Use motion.div for animations on larger screens
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                variants={slideInFromBottom(0.2 * i)}
                                viewport={{ once: true, amount: 0.5 }}
                                className="col-span-12 lg:col-span-3 z-10 mb-8 lg:mb-0"
                            >
                                <CatCard
                                    klasse="col-span-12 z-10 !h-[30svh] 2xl:!h-[42svh]"
                                    title="TEST"
                                    subline="test"
                                    image={e.src}
                                />
                                <H3 klasse="!mb-0 mt-2 lg:mt-4">Sommerakademie</H3>
                                <div className="w-full">
                                    <div className="left">
                                        <P klasse="font-bold">01.-05.02.2024</P>
                                    </div>
                                    <div className="right mt-2">
                                        <P>Faszination Pigmente</P>
                                    </div>
                                    <TextButton link="">Infos & Anmeldung</TextButton>
                                </div>
                            </motion.div>
                        )
                    )}
                </div>
                {noBtn ? null : (
                    <div className="col-span-12 flex justify-center">
                        <GhostButton klasse="mt-8" link="/gallery">
                            Alle Bilder
                        </GhostButton>
                    </div>
                )}

                <div
                    ref={parallaxRef2}
                    className="bg-primaryColor-100 absolute 3xl:w-[26.6svw] 3xl:h-[43svh] 3xl:left-[11.9svw] 3xl:top-[14svh]"
                ></div>
            </SectionContainer>
        </>
    );
};

export default CoursesOverview;

// data-scroll data-scroll-speed="3"
