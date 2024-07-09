import React, { useState, useRef, useEffect } from "react";

//COMPS
import SectionContainer from "../../components/layout/sectionContainer";
import { CoverImage } from "../../components/images";

//TYPO
import { H1, H2, P } from "../../components/typography";

// ANIMATION
import { motion } from "framer-motion";
import Parallax from "../../components/parallax";

//FUNCTIONS
import urlFor from "../../functions/urlFor";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

//HOOKS
import useDimension from "../../hooks/useDimension";

//FUNCTIONS
// import urlFor from "../../functions/urlFor";

// ANIMATION
import ParallaxElement from "../../animations/parallax/parallaxElement";

const Gallery = ({ images }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

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

    // Split the images into three parts
    const columnCount = 3;
    const columns = Array.from({ length: columnCount }, (_, index) =>
        images.filter((_, imageIndex) => imageIndex % columnCount === index)
    );

    return (
        <>
            <SectionContainer klasse="gap-8 grid-rows-[auto_1fr] py-36" fullHeight>
                <div className="col-span-12  lg:order-first">
                    <div className=" px-4 lg:px-0 bottom-[18.12svh] top-auto 3xl:top-[48svh] z-10">
                        <H1>
                            King-of-Saxony
                            <br />
                            Bird-of-Paradise
                        </H1>
                    </div>
                </div>
                <div className="grid col-span-12 grid-cols-12 px-16 gap-16 ">
                    {columns.map((column, columnIndex) => (
                        <Parallax speed={1 * columnIndex + 2} key={columnIndex} className="col-span-12 md:col-span-4">
                            {column.map((image, index) => (
                                <motion.div
                                    key={index}
                                    className={`parallax-item`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: index * 0.2 }}
                                >
                                    <CoverImage
                                        src={urlFor(image.image).url()} // Replace with the actual path to your image
                                        mobileSrc={urlFor(image.image).url()} // Replace with the actual path to your image
                                        alt="Cover Background"
                                        // style={{ aspectRatio: image.aspect_ratio?.split("_").join("/") }}
                                        className={`w-full z-20  lg:block relative mb-8 overflow-hidden aspect-[1/0.73] md:aspect-[1/0.7] 2xl:aspect-[1/1]`}
                                        // data-aos={"fade-left"}

                                        priority={true}
                                    />
                                    <img src={image.url} alt={image.alt} className="w-full h-auto" />
                                </motion.div>
                            ))}
                        </Parallax>
                    ))}
                </div>
            </SectionContainer>
        </>
    );
};

export default Gallery;

// data-scroll data-scroll-speed="3"
