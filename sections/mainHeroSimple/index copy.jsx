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
import Hero4 from "../../assets/test/heroNew2.jpg";
import Hero5 from "../../assets/test/heroNew3.jpg";
import Hero6 from "../../assets/test/heroNew4.jpg";
import Hero7 from "../../assets/test/heroNew5.jpg";
import Hero8 from "../../assets/test/heroNew6.jpg";
import Hero9 from "../../assets/test/heroNew7.jpg";
import Hero10 from "../../assets/test/heroNew8.jpg";
import Hero11 from "../../assets/test/heroNew9.jpg";
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
import useFadeOutOnScroll from "../../hooks/useFadeOutOnScroll";

const MainHeroSection = () => {
    const [swiper, setSwiper] = useState(null);
    const [isLastSlideLeft, setIsLastSlideLeft] = useState(true);
    const [isLastSlideRight, setIsLastSlideRight] = useState(false);
    const [data, setDate] = useState([Hero3, Hero4, Hero5, Hero6, Hero7, Hero8, Hero9, Hero10, Hero11]);

    const [scrollY, setScrollY] = useState(0);

    const parallaxRef = useRef(null);
    const elementRef = useRef(null);
    const h1Ref = useRef(null);
    const opacity = useFadeOutOnScroll(h1Ref);

    const { width, height } = useDimension();

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        console.log(height, width);
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

    const greyscaleValue = Math.min(scrollY / 1000, 1); // Adjust the divisor to control the sensitivity
    const blurValue = Math.min(scrollY / 100, 10); // Adjust the divisor and max value as needed
    const scaleValue = 1 + Math.min(scrollY / 5000, 0.05); // Adjust the divisor and max value for scaling
    const translateXValue = -Math.min(scrollY / 2, 500); // Adjust the divisor and max value for sliding out
    const fadeOutValue = 1 - Math.min(scrollY / 1000, 1); // Adjust the divisor to control the opacity

    return (
        <>
            <SectionContainer klasse="md:grid-rows-none grid-rows-[auto_1fr] smooth-content" fullHeight>
                <div className="col-span-12 lg:col-span-4 lg:order-first 2xl:pl-28">
                    <div
                        style={{
                            opacity: fadeOutValue,
                            transform: `translateX(${translateXValue + "px"})`,
                        }}
                        className="fixed px-4 lg:px-0 bottom-[14svh] xl:bottom-[18.12svh] top-auto 3xl:top-[48svh] z-20"
                    >
                        <H1 klasse="text-white lg:text-darkGrey 2xl:!text-[12rem]" ref={h1Ref}>
                            <span className="font-thin">King-of-Saxony</span>
                            <br />
                            Bird-of-Paradise
                        </H1>
                    </div>
                    <div className="fixed hidden lg:flex 3xl:top-[69.7svh]  justify-between w-2/4 z-10">
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
                    <div className="wrapper bottom-[6svh] lg:bottom-auto 3xl:top-[87.7svh] fixed z-20 lg:z-10 flex justify-center lg:justify-between w-full px-4 lg:px-0">
                        {/* <!-- 
    <div className="left text-sm font-body ">
        Atelier Buchner | Prof. Sepp Buchner Straße 528 <br />
        office@atelierbuchner.at
    </div> 
    --> */}
                        <MainButton aklass="" klasse="w-[90svw] lg:w-auto " link="/gallery">
                            Alle Bilder
                        </MainButton>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-8 order-first lg:order-last px-[40px] lg:px-0">
                    <Parallax
                        speed={1.2}
                        style={{
                            width: width <= 420 ? width + "px" : width * 0.64584 + "px",
                            // transform: ` scale(${scaleValue})`,
                            filter: `grayscale(${greyscaleValue}) blur(${blurValue}px)`,
                        }}
                        className="top-[3.58svh] h-[100svh] xl:h-auto left-0 xl:left-auto fixed z-20 xl:z-0 xl:top-[-16.42svh] "
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
                                        <div className="text-white hidden lg:block absolute bottom-48 right-24 z-20 font-body tracking-wider text-sm">
                                            Name des Bilder | 2024
                                        </div>
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
                <div
                    ref={parallaxRef}
                    className="bg-primaryColor-100 absolute w-full 3xl:w-[13.64svw] h-[25svh] 3xl:h-[59.9svh] 3xl:left-[-2.97svw] top-[25svh] 3xl:top-[36svh]"
                ></div>
            </SectionContainer>
        </>
    );
};

export default MainHeroSection;

// data-scroll data-scroll-speed="3"
