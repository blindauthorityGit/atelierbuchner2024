import React, { useState, useEffect, useRef } from "react";

//COMPS
import SectionContainer from "../../components/layout/sectionContainer";
import { CoverImage } from "../../components/images";
import { MainButton, MainButtonNOLink, GhostButton } from "../../components/buttons";
import { BasicHeroElement } from "../../components/swiper";
//TYPO
import { H1, H4, P } from "../../components/typography";
//ASSETS
import Hero2 from "../../assets/test/galerie.jpg";
import Hero3 from "../../assets/test/kurs2.jpg";
import Hero4 from "../../assets/test/kurs3_1.jpg";
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

const HeroSection = ({ darken, buttons, ghostLink, mainLink, ghostText, mainText }) => {
    const [swiper, setSwiper] = useState(null);
    const [isLastSlideLeft, setIsLastSlideLeft] = useState(true);
    const [isLastSlideRight, setIsLastSlideRight] = useState(false);
    const [data, setDate] = useState([Hero5]);

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
            <SectionContainer klasse="md:grid-rows-none  smooth-content" fullHeight>
                <div className="col-span-12 pt-14 lg:pt-0 lg:col-span-5 flex flex-col lg:justify-center xl:pl-24 z-20">
                    <div className=" pt-4 lg:pt-0 lg:text-right px-4 lg:px-0 xl:bottom-[18.12svh] top-auto 3xl:right-[0svh] 3xl:top-[28svh] z-10">
                        <H4 klasse="lg:right-0 hidden lg:pr-16 !mb-0 lg:mb-6 !font-black">02. - 06.02.2024</H4>

                        <H1 klasse="text-left  !font-bold">
                            <span className="text-[3.75rem] lg:text-9xl !leading-[0.75]">
                                Frühlings
                                <br />
                                akademie
                                <br />
                                2024
                            </span>
                        </H1>
                    </div>
                    <div className="  lg:pt-16 xl:pt-0 px-4 lg:px-0 z-10">
                        <H4 klasse="xl:pr-16 !mb-0">4 Tage Studium des menschlichen Gesichtes</H4>
                        <P klasse="hidden lg:block">
                            Step into a world of art, where creativity and expression come
                            <br /> together tocreate a symphony of beauty Step into a world of art, where creativity and
                        </P>

                        {buttons ? (
                            <div className="lg:flex hidden  mt-8 lg:mt-16 flex-grow w-full  sm:space-y-0 sm:space-x-4">
                                <GhostButton klasse="flex-grow mb-4 lg:mb-0" link={ghostLink} noMargin>
                                    {ghostText}
                                </GhostButton>
                                <MainButton klasse="bg-darkGrey flex-grow" link={mainLink}>
                                    {mainText}
                                </MainButton>
                            </div>
                        ) : null}
                    </div>
                    {/* <div className="wrapper   3xl:top-[87.7svh] justify-between relative hidden lg:flex pr-36">
                        <div className="left text-sm font-body ">
                            Atelier Buchner | Prof. Sepp Buchner Straße 528 <br />
                            office@atelierbuchner.at
                        </div>{" "}
                        <GhostButton klasse="mt-8" link="/gallery">
                            Alle Bilder
                        </GhostButton>
                    </div> */}
                </div>
                <div
                    className={`col-span-12 lg:col-span-7 lg:order-first lg:px-0 z-10 ${
                        darken ? "mix-blend-darken" : null
                    }`}
                >
                    <Parallax
                        onLoad={() => {
                            console.log("loaded noinoenoen");
                        }}
                        speed={1.8}
                        className="top-[-2rem] hidden lg:block lg:top-[3.58svh] w-[100svw] lg:w-[44svw] lg:h-[60svh] z-20 xl:z-0 xl:w-[51svw] xl:top-[-6svh] relative"
                    >
                        <Swiper
                            // install Swiper modules
                            modules={[Pagination, Navigation, A11y]}
                            slidesPerView={1}
                            lazy
                            onLoad={() => {
                                console.log("loaded noinoenoen");
                            }}
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

                    <CoverImage
                        src={data[0].src}
                        mobileSrc={data[0].src}
                        alt="Cover Background"
                        klasse={""}
                        style={{ aspectRatio: "16/9" }}
                        className="w-full relative lg:hidden h-[42svh]"
                    />
                </div>
                <div className="col-span-12 px-4 lg:hidden block  ">
                    {buttons ? (
                        <div className="mt-2 lg:mt-16 flex-grow w-full  sm:space-y-0 sm:space-x-4">
                            <MainButton klasse="bg-darkGrey flex-grow" link={mainLink}>
                                {mainText}
                            </MainButton>
                        </div>
                    ) : null}
                </div>
                <div
                    ref={parallaxRef}
                    className="bg-primaryColor-100 absolute w-[40%] 3xl:w-[26.64svw] right-4 h-[25svh] 3xl:h-[38.9svh] 3xl:left-[-2.97svw] top-[14svh] 3xl:top-[20svh]"
                ></div>
            </SectionContainer>
        </>
    );
};

export default HeroSection;

// data-scroll data-scroll-speed="3"
