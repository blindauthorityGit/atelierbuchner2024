import React, { useState, useEffect, useRef } from "react";

//COMPS
import MainHero from "../../components/hero/mainHero";
import SectionContainer from "../../components/layout/sectionContainer";
import { CoverImage } from "../../components/images";
import { MainButton } from "../../components/buttons";
import { HeroElement } from "../../components/swiper";
//TYPO
import { H1, P } from "../../components/typography";
//ASSETS
import Hero2 from "../../assets/test/hero2.jpg";
import Hero3 from "../../assets/test/hero3.jpg";
import Hero4 from "../../assets/test/hero4.jpg";
import Hero5 from "../../assets/test/hero5.jpg";
import Hero6 from "../../assets/test/hero6.jpg";
import Chevron from "../../assets/icons/chevron.svg";
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

const MainHeroSection = () => {
    const [swiper, setSwiper] = useState(null);
    const [isLastSlideLeft, setIsLastSlideLeft] = useState(true);
    const [isLastSlideRight, setIsLastSlideRight] = useState(false);
    const [data, setDate] = useState([Hero2, Hero3, Hero4, Hero5, Hero6]);

    const parallaxRef = useRef(null);
    const headlineRef = useRef(null);

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
                <div className="col-span-12 lg:col-span-12 flex flex-col items-center justify-center lg:order-first w-full relative 2xl:h-[66svh]">
                    <div ref={headlineRef} className=" px-4 lg:px-0   z-10">
                        <H1 klasse="2xl:text-9xl text-center">
                            <span className="">King-of-Saxony</span>
                            <br />
                            Bird-of-Paradise
                        </H1>
                    </div>
                    <div className="absolute hidden lg:flex 3xl:top-[69.7svh]  justify-between w-2/4 z-10">
                        <P>
                            Step into a world of art, where creativity and expression come
                            <br /> together tocreate a symphony of beauty
                        </P>
                        <div className="flex">
                            <img
                                onClick={() => {
                                    swiper.slidePrev();
                                }}
                                src={Chevron.src}
                                className="mr-16"
                                alt=""
                            />
                            <img
                                onClick={() => {
                                    swiper.slideNext();
                                }}
                                src={Chevron.src}
                                className="rotate-180"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="wrapper   3xl:top-[87.7svh] justify-between relative hidden lg:flex pr-36">
                        <div className="left text-sm font-body ">
                            Atelier Buchner | Prof. Sepp Buchner Straße 528 <br />
                            office@atelierbuchner.at
                        </div>{" "}
                        <MainButton aklass="" link="/gallery">
                            Alle Bilder
                        </MainButton>
                    </div>
                    <div
                        ref={parallaxRef}
                        className="bg-primaryColor-100 absolute w-full 3xl:w-[13.64svw] h-[25svh] 3xl:h-[28.9svh] 3xl:left-[20.97svw] top-[25svh] 3xl:top-[39svh]"
                    ></div>
                </div>
                <div className="col-span-12 grid grid-cols-12">
                    <div className="col-span-4">ZES</div>
                    <div className="col-span-4">
                        <CoverImage
                            src={Hero2.src}
                            mobileSrc={Hero2.src}
                            alt="Cover Background"
                            klasse={"absolute top-[8.42svh]"}
                            style={{ aspectRatio: "1/1" }}
                            className="w-full relative "
                        />
                    </div>
                    <div className="col-span-4">ZES</div>
                </div>
                <div className="col-span-12 lg:col-span-12 hidden order-first lg:order-last px-[40px] lg:px-0">
                    <Parallax speed={1.8} className="top-[3.58svh] z-20 xl:z-0 xl:top-[-8.42svh] relative">
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
                                        <HeroElement image={e} mobileImage={e}></HeroElement>
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
            </SectionContainer>
        </>
    );
};

export default MainHeroSection;

// data-scroll data-scroll-speed="3"
