import React, { useState, useRef, useEffect } from "react";

//COMPS
import SectionContainer from "../../components/layout/sectionContainer";
import { CoverImage } from "../../components/images";
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
import Galerie from "../../assets/test/galerie.jpg";

//HOOKS
import useDimension from "../../hooks/useDimension";

//FUNCTIONS
// import urlFor from "../../functions/urlFor";

// ANIMATION
import ParallaxElement from "../../animations/parallax/parallaxElement";

const BasicTextImage = ({ klasse }) => {
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
            <SectionContainer klasse={`gap-4 xl:gap-12  ${klasse} py-48`}>
                <div className="col-span-1"></div>
                <motion.div
                    className="col-span-5 h-auto z-10 xl:pr-8"
                    initial="hidden"
                    whileInView="visible"
                    variants={slideInFromLeft(0.2)}
                    viewport={{ once: false }}
                >
                    <H2 klasse="ml-[-8rem]">
                        <span className="">AKADEMIEN IM ZYKLUS</span>
                        <br />
                        <span>DER JAHRESZEITEN</span>
                    </H2>

                    <P>
                        Lorem ipsum dolor sit amet consectetur. Risus eget eleifend porttitor quis mattis tellus. Sed
                        ultrices cras lectus rhoncus. Dui convallis neque nulla tortor pellentesque quis scelerisque.
                        Elementum vitae eget pharetra dui adipiscing auctor. Sit nulla tristique natoque convallis
                        venenatis. Sed elit donec tellus vitae mattis odio sed. Bibendum varius nullam facilisis iaculis
                        interdum.
                    </P>
                    <P>
                        Lorem ipsum dolor sit amet consectetur. Risus eget eleifend porttitor quis mattis tellus. Sed
                        ultrices cras lectus rhoncus. Dui convallis neque nulla tortor pellentesque quis scelerisque.
                        Elementum vitae eget pharetra dui adipiscing auctor. Sit nulla tristique natoque convallis
                        venenatis. Sed elit donec tellus vitae mattis odio sed. Bibendum varius nullam facilisis iaculis
                        interdum.
                    </P>
                    <P>
                        Lorem ipsum dolor sit amet consectetur. Risus eget eleifend porttitor quis mattis tellus. Sed
                        ultrices cras lectus rhoncus. Dui convallis neque nulla tortor pellentesque quis scelerisque.
                        Elementum vitae eget pharetra dui adipiscing auctor. Sit nulla tristique natoque convallis
                        venenatis. Sed elit donec tellus vitae mattis odio sed. Bibendum varius nullam facilisis iaculis
                        interdum. Lorem ipsum dolor sit amet consectetur. Risus eget eleifend porttitor quis mattis
                        tellus. Sed ultrices cras lectus rhoncus. Dui convallis neque nulla tortor pellentesque quis
                        scelerisque. Elementum vitae eget pharetra dui adipiscing auctor. Sit nulla tristique natoque
                        convallis venenatis. Sed elit donec tellus vitae mattis odio sed. Bibendum varius nullam
                        facilisis iaculis interdum.
                    </P>
                </motion.div>
                <motion.div
                    className="col-span-6 h-auto z-10 relative"
                    initial="hidden"
                    whileInView="visible"
                    variants={slideInFromLeft(0.2)}
                    viewport={{ once: false }}
                >
                    <CoverImage
                        src={Galerie.src}
                        mobileSrc={Galerie.src}
                        alt="Cover Background"
                        klasse={""}
                        // style={{ }}
                        className=" !aspect-[9/16] lg:!aspect-[1/1]"
                    />
                </motion.div>
                <div
                    ref={parallaxRef2}
                    className="bg-primaryColor-100 absolute 3xl:w-[26.6svw] 3xl:h-[43svh] 3xl:left-[11.9svw] 3xl:top-[14svh]"
                ></div>
            </SectionContainer>
        </>
    );
};

export default BasicTextImage;

// data-scroll data-scroll-speed="3"
