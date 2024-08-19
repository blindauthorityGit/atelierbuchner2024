import React, { useState, useEffect, useRef } from "react";

//COMPS
import MainHero from "../../components/hero/mainHero";
import SectionContainer from "../../components/layout/sectionContainer";
import { CoverImage } from "../../components/images";
import { MainButton, GhostButton, GeneralNavButton } from "../../components/buttons";
import { HeroElement } from "../../components/swiper";
//TYPO
import { H1, P } from "../../components/typography";
//ASSETS
import CourseMain from "../../assets/test/courseMain.jpg";
import CourseRight from "../../assets/test/courseRight.jpg";
import CourseLeft from "../../assets/test/courseLeft.jpg";
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
import ArrowButton from "../../assets/icons/arrowButton.svg";
import Quotes from "../../assets/icons/quotes.svg";
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

const CourseHero = () => {
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
            <SectionContainer
                klasse="md:grid-rows-none grid-rows-[auto_1fr] smooth-content !bg-primaryColor-100"
                fullHeight
            >
                <div className="col-span-12 lg:col-span-4 lg:order-first  2xl:pl-28 relative">
                    <div
                        style={{
                            opacity: fadeOutValue,
                            transform: `translateX(${translateXValue + "px"})`,
                        }}
                        className="fixed px-4 lg:px-0 bottom-[13svh] xl:bottom-auto top-auto 3xl:top-[23svh] z-20"
                    >
                        <H1 klasse="text-darkGrey 2xl:!text-[10rem]" ref={h1Ref}>
                            <div className="font-thin">Kunst</div>

                            <div className="pl-12 mt-[-0.75rem] 2xl:pl-20 2xl:mt-[-1.86rem]"> Schaffen</div>
                        </H1>
                        <div className=" lg:hidden flex-col 3xl:top-[58.2svh] xl:ml-56 justify-between lg:w-1/4 xl:w-[15svw] z-10">
                            <img className="w-6 mb-2" src={Quotes.src} alt="" />
                            {/* <div className="lg:text-9xl font-headline text-primaryColor-300">"</div> */}
                            <P>
                                Mit professioneller Anleitung verwandeln Sie Ihre Kreativität in beeindruckende Kunst
                                und erleben künstlerische Erfolge.
                            </P>
                        </div>
                    </div>
                    <div className="fixed hidden lg:flex flex-col 3xl:top-[60.2svh] xl:ml-56 justify-between lg:w-1/4 xl:w-[15svw] z-10">
                        <img className="w-12 mb-6" src={Quotes.src} alt="" />

                        <P>
                            Mit professioneller Anleitung verwandeln Sie Ihre Kreativität in beeindruckende Kunst und
                            erleben künstlerische Erfolge.
                        </P>
                    </div>
                    <div
                        style={{
                            width: width <= 420 ? width + "px" : width * 0.1666 + "px",
                            // transform: ` scale(${scaleValue})`,
                            filter: `grayscale(${greyscaleValue}) blur(${blurValue}px)`,
                        }}
                        className="top-[3.58svh] hidden lg:block mix-blend-multiply absolute opacity-50 xl:top-auto xl:bottom-[7svh] h-[80svh] xl:h-auto  xl:left-[-2svw]  z-20 xl:z-0  "
                    >
                        <div className="relative">
                            <div className="w-full lg:hidden block h-full absolute z-20 bg-gradient-to-t from-darkGrey via-transparent to-transparent"></div>
                            <CoverImage
                                src={CourseLeft.src}
                                mobileSrc={CourseLeft.src}
                                alt="Cover Background"
                                klasse={"absolute "}
                                // style={{ }}
                                className="w-full !aspect-[9/16] lg:!aspect-[0.8/1] "
                            />
                        </div>
                    </div>
                </div>
                <div className="col-span-12 z-10 lg:col-span-6 mix-blend-multiply order-first lg:order-last px-4 lg:px-0 xl:pl-32 relative flex justify-end lg:justify-start">
                    <Parallax
                        speed={1.2}
                        style={{
                            width: width <= 420 ? width * 0.5375 + "px" : width * 0.3541 + "px",
                            height: width <= 420 ? height * 0.3873 + "px" : null,
                            filter: `grayscale(${greyscaleValue}) blur(${blurValue}px)`,
                        }}
                        className="top-[8svh]  opacity-85 xl:top-[-0rem]  xl:h-auto  xl:left-auto fixed z-20 xl:z-0  "
                    >
                        <div className="relative">
                            {/* <div className="w-full lg:hidden block h-full absolute z-20 opacity-100 bg-gradient-to-t from-darkGrey via-transparent to-transparent"></div> */}
                            <CoverImage
                                src={CourseMain.src}
                                mobileSrc={CourseMain.src}
                                alt="Cover Background"
                                klasse={"absolute "}
                                style={{
                                    width: width <= 420 ? width * 0.5375 + "px" : width * 0.3541 + "px",
                                    height: width <= 420 ? height * 0.4073 + "px" : null,
                                }}
                                className="w-full aspect-[1/1.3] lg:!aspect-[1/1.3] "
                            />
                        </div>
                    </Parallax>
                </div>

                <div className="col-span-12 z-10 lg:col-span-2 opacity-65 mix-blend-multiply order-first lg:order-last px-4 lg:px-0 xl:pl-12 relative flex justify-start">
                    <Parallax
                        speed={2.0}
                        style={{
                            width: width <= 420 ? width * 0.275 + "px" : width * 0.1458 + "px",
                            height: width <= 420 ? height * 0.25 + "px" : null,
                            filter: `grayscale(${greyscaleValue}) blur(${blurValue}px)`,
                        }}
                        className="top-[19svh]  opacity-85 xl:top-[8svh] h-[80svh] xl:h-auto  xl:left-auto fixed z-20 xl:z-0  "
                    >
                        <div className="relative">
                            <div className="w-full lg:hidden block h-full absolute z-20 opacity-100 bg-gradient-to-t from-darkGrey via-transparent to-transparent"></div>
                            <CoverImage
                                src={CourseRight.src}
                                mobileSrc={CourseRight.src}
                                alt="Cover Background"
                                klasse={"absolute "}
                                style={{
                                    width: width <= 420 ? width * 0.275 + "px" : width * 0.1458 + "px",
                                    height: width <= 420 ? height * 0.25 + "px" : null,
                                }}
                                className="w-full !aspect-[9/16] lg:!aspect-[1/2] "
                            />
                        </div>
                    </Parallax>
                </div>
                <div className="col-span-12 flex lg:hidden justify-center   pb-2">
                    {/* <p className="text-xs block text-primaryColor-400"> Scroll for more</p> */}
                    <img
                        style={{
                            opacity: fadeOutValue,
                        }}
                        src={Chevron.src}
                        className="rotate-[270deg] fixed bottom-4"
                        alt=""
                    />
                </div>

                <div
                    ref={parallaxRef}
                    className="bg-[#E2E0D9] absolute left-[10svw] w-[37svw] 3xl:w-[13.64svw] h-[30svh] 3xl:h-[26.6svh] 3xl:left-[11vw] top-[38svh] 3xl:top-[26svh]"
                ></div>
            </SectionContainer>
        </>
    );
};

export default CourseHero;

// data-scroll data-scroll-speed="3"
