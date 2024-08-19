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
import IntroImg from "../../assets/test/introImg.jpg";

//HOOKS
import useDimension from "../../hooks/useDimension";

//FUNCTIONS
// import urlFor from "../../functions/urlFor";

// ANIMATION
import ParallaxElement from "../../animations/parallax/parallaxElement";

const IntroText = ({ klasse }) => {
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
            <SectionContainer klasse={`gap-4 xl:gap-12 relative ${klasse}  px-4 py-12 lg:py-48`}>
                <div className="hidden lg:block lg:col-span-1"></div>
                <motion.div
                    className="col-span-12 lg:col-span-7 pt-16 h-auto z-10 xl:pr-8 relative xl:pl-36"
                    initial="hidden"
                    whileInView="visible"
                    variants={slideInFromLeft(0.2)}
                    viewport={{ once: true }}
                >
                    <H2 klasse="lg:ml-[-8rem] lg:absolute z-20 top-24 left-8">
                        <div className="">Kreativität in</div>
                        <div>Gemeinschaft</div>
                    </H2>
                    <div className="mix-blend-multiply opacity-70">
                        <motion.div
                            className=" h-auto z-10 relative opacity-80"
                            initial="hidden"
                            whileInView="visible"
                            variants={slideInFromLeft(0.2)}
                            viewport={{ once: true }}
                        >
                            <CoverImage
                                src={IntroImg.src}
                                mobileSrc={IntroImg.src}
                                alt="Cover Background"
                                klasse={""}
                                // style={{ }}
                                className=" !aspect-[16/9] lg:!aspect-[4/3]"
                            />
                        </motion.div>
                    </div>
                </motion.div>
                <div className="col-span-12 lg:col-span-4 pt-4 flex flex-col justify-center">
                    <P klasse="mb-6">
                        <strong>
                            {" "}
                            Lorem ipsum dolor sit amet consectetur. Risus eget eleifend porttitor quis mattis tellus.
                            Sed ultrices cras lectus rhoncus.
                        </strong>{" "}
                        Dui convallis neque nulla tortor pellentesque quis scelerisque. Elementum vitae eget pharetra
                        dui adipiscing auctor. Sit nulla tristique natoque convallis venenatis. Sed elit donec tellus
                        vitae mattis odio sed. Bibendum varius nullam facilisis iaculis interdum.
                    </P>
                    <P>
                        Lorem ipsum dolor sit amet consectetur. Risus eget eleifend porttitor quis mattis tellus. Sed
                        ultrices cras lectus rhoncus. Dui convallis neque nulla tortor pellentesque quis scelerisque.
                        Elementum vitae eget pharetra dui adipiscing auctor. Sit nulla tristique natoque convallis
                        venenatis. Sed elit donec tellus vitae mattis odio sed. Bibendum varius nullam facilisis iaculis
                        interdum.
                    </P>
                </div>
                <div
                    ref={parallaxRef3}
                    className="bg-primaryColor-100 absolute top-[12svh] left-[20svw] w-[40svw] h-[25svh] 3xl:w-[10.83svw] 3xl:h-[15svh] 3xl:left-[0] 3xl:top-[22svh]"
                ></div>
            </SectionContainer>
        </>
    );
};

export default IntroText;

// data-scroll data-scroll-speed="3"
