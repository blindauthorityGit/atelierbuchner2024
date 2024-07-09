import React, { useState, useEffect, useRef } from "react";

//COMPS
import SectionContainer from "../../components/layout/sectionContainer";
import { CoverImage } from "../../components/images";
import { MainButton, GhostButton } from "../../components/buttons";
import { BasicHeroElement } from "../../components/swiper";
//TYPO
import { H1, H4, P } from "../../components/typography";
//ASSETS
import Hero2 from "../../assets/test/galerie.jpg";
import Hero3 from "../../assets/test/kurs.jpg";
import Hero4 from "../../assets/test/hero4.jpg";
import Hero5 from "../../assets/test/hero5.jpg";
import Hero6 from "../../assets/test/hero6.jpg";
// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//FUNCTIONS
// import urlFor from "../../functions/urlFor";

// ANIMATION
import ParallaxElement from "../../animations/parallax/parallaxElement";
import Parallax from "../../components/parallax";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

//HOOKS
import useDimension from "../../hooks/useDimension";

const HeroSection = () => {
    const [swiper, setSwiper] = useState(null);
    const [isLastSlideLeft, setIsLastSlideLeft] = useState(true);
    const [isLastSlideRight, setIsLastSlideRight] = useState(false);
    const [data, setDate] = useState([Hero2, Hero3, Hero4, Hero5, Hero6]);

    const parallaxRef = useRef(null);

    const { height } = useDimension();

    useEffect(() => {
        console.log(height);
    }, [height]);

    useEffect(() => {
        // Ensure initial transform is set to neutral
        gsap.set(parallaxRef.current, { y: 0 });

        const setupParallax = () => {
            gsap.fromTo(
                parallaxRef.current,
                { y: 0 },
                {
                    y: "-50%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: parallaxRef.current,
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
            <SectionContainer klasse="md:grid-rows-none grid-rows-[auto_1fr] smooth-content" fullHeight>
                <div className="col-span-12 lg:col-span-6 flex flex-col justify-end pl-24 z-20">
                    <div className="absolute px-4 lg:px-0 bottom-[18.12svh] top-auto 3xl:left-[55svh] 3xl:top-[20svh] z-10">
                        <H1>
                            <span className="font-thin">King-of-Saxony</span>
                            <br />
                            <span className="font-bold ml-16">Bird-of-Paradise</span>
                        </H1>
                    </div>
                    <div className="  3xl:top-[69.7svh]  h-2/4 pt-16   z-10">
                        <H4>4 Tage Studium des menschlichen Gesichtes</H4>
                        <P>
                            Step into a world of art, where creativity and expression come
                            <br /> together tocreate a symphony of beauty Step into a world of art, where creativity and
                            expression come together tocreate a symphony of beauty Step into a world of art, where
                            creativity and expression come
                            <br /> together tocreate a symphony of beauty
                        </P>
                        <GhostButton klasse="mt-12" link="/gallery">
                            Alle Bilder
                        </GhostButton>
                    </div>
                    <div className="wrapper   3xl:top-[87.7svh] justify-between relative hidden lg:flex pr-36">
                        <div className="left text-sm font-body ">
                            Atelier Buchner | Prof. Sepp Buchner Straße 528 <br />
                            office@atelierbuchner.at
                        </div>{" "}
                        <GhostButton klasse="mt-8" link="/gallery">
                            Alle Bilder
                        </GhostButton>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6 order-first  px-[40px] lg:px-0 z-10">
                    <Parallax
                        speed={1.8}
                        className="top-[3.58svh] w-[44svw] h-[60svh] z-20 xl:z-0 xl:top-[17svh] relative"
                    >
                        <Swiper
                            // install Swiper modules
                            modules={[Pagination, Navigation, A11y]}
                            slidesPerView={1}
                            lazy
                            pagination={{ clickable: true, dynamicBullets: true }}
                            onSwiper={(swiper) => {
                                {
                                    setSwiper(swiper);
                                }
                            }}
                            onSlideChange={() => {
                                // handleNav();
                            }}
                            className="h-full eventSlider"
                            // style={{ paddingBottom: "3.75rem!important" }}
                            breakpoints={{}}
                        >
                            {data.map((e, i) => {
                                return (
                                    <SwiperSlide key={`viewAllSlide${i}`} className="">
                                        <BasicHeroElement image={e} mobileImage={e}></BasicHeroElement>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </Parallax>
                    {/* <CoverImage
                        src={Hero.src}
                        mobileSrc={Hero.src}
                        alt="Cover Background"
                        klasse={"absolute top-[8.42svh]"}
                        style={{ aspectRatio: "0.93/1" }}
                        className="w-full relative top-[8.42svh]"
                    /> */}
                </div>{" "}
                <div
                    ref={parallaxRef}
                    className="bg-primaryColor-200 absolute w-full 3xl:w-[26.64svw] h-[25svh] 3xl:h-[38.9svh] 3xl:left-[-2.97svw] top-[14svh] 3xl:top-[24svh]"
                ></div>
            </SectionContainer>
        </>
    );
};

export default HeroSection;

// data-scroll data-scroll-speed="3"
