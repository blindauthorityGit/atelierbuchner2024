import React, { useState, useEffect } from "react";

//COMPS
import MainHero from "../../components/hero/mainHero";
import SectionContainer from "../../components/layout/sectionContainer";
import { CatCard } from "../../components/cards";
import { MainButton } from "../../components/buttons";
import { HeroElement } from "../../components/swiper";
//TYPO
import { H1, H2, P } from "../../components/typography";
//ASSETS
import Hero2 from "../../assets/test/hero2.jpg";
import Hero3 from "../../assets/test/hero3.jpg";
import Hero4 from "../../assets/test/hero4.jpg";
import Hero5 from "../../assets/test/hero5.jpg";
import Hero6 from "../../assets/test/hero6.jpg";
import Chevron from "../../assets/icons/chevron.svg";
// ANIMATION
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//FUNCTIONS
// import urlFor from "../../functions/urlFor";

// ANIMATION
import ParallaxElement from "../../animations/parallax/parallaxElement";

const CoursesOverview = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const [data, setDate] = useState([Hero2, Hero3, Hero4, Hero5]);

    const handleHoverStart = (index) => {
        setHoveredIndex(index);
    };

    const handleHoverEnd = () => {
        setHoveredIndex(null);
    };

    return (
        <>
            <SectionContainer klasse="gap-4 grid-rows-[auto_1fr] py-48" fullHeight>
                <div className="col-span-6 h-auto z-10">
                    <H2>
                        AKADEMIEN IM ZYKLUS
                        <br /> DER JAHRESZEITEN
                    </H2>
                </div>
                <div className="col-span-6 h-auto z-10">
                    <P>
                        Lorem ipsum dolor sit amet consectetur. Risus eget eleifend porttitor quis mattis tellus. Sed
                        ultrices cras lectus rhoncus. Dui convallis neque nulla tortor pellentesque quis scelerisque.
                        Elementum vitae eget pharetra dui adipiscing auctor. Sit nulla tristique natoque convallis
                        venenatis. Sed elit donec tellus vitae mattis odio sed. Bibendum varius nullam facilisis iaculis
                        interdum. Felis pharetra elit dolor porta. Sit ultrices cursus laoreet enim imperdiet vitae
                        vitae duis ullamcorper.
                    </P>
                </div>
                <div className="px-24 grid grid-cols-12 col-span-12 gap-8 z-10">
                    {data.map((e, i) => {
                        return (
                            <CatCard
                                data-scroll
                                data-scroll-speed={i + 2}
                                klasse="col-span-3 z-10"
                                title="TEST"
                                subline="test"
                                image={e.src}
                                // onHoverStart={() => handleHoverStart(i)}
                                // onHoverEnd={handleHoverEnd}
                                // animate={{
                                //     scale: hoveredIndex === i ? 1.1 : hoveredIndex === null ? 1 : 0.9,
                                //     filter: hoveredIndex === null || hoveredIndex === i ? "none" : "blur(4px)",
                                // }}
                                // transition={{ duration: 0.3 }}
                            ></CatCard>
                        );
                    })}
                </div>
                <div
                    data-scroll
                    data-scroll-speed="1"
                    className="bg-primaryColor-200 absolute 3xl:w-[26.6svw] 3xl:h-[43svh] 3xl:left-[11.9svw] 3xl:top-[14svh]"
                ></div>
            </SectionContainer>
        </>
    );
};

export default CoursesOverview;

// data-scroll data-scroll-speed="3"
