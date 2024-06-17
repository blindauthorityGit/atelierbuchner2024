import React, { useState, useEffect } from "react";

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

const MainHeroSection = () => {
    const [swiper, setSwiper] = useState(null);
    const [isLastSlideLeft, setIsLastSlideLeft] = useState(true);
    const [isLastSlideRight, setIsLastSlideRight] = useState(false);
    const [data, setDate] = useState([Hero2, Hero3, Hero4, Hero5, Hero6]);

    return (
        <>
            <SectionContainer klasse="md:grid-rows-none grid-rows-[auto_1fr]" fullHeight>
                <div className="col-span-12 lg:col-span-6 lg:order-first">
                    <div
                        className="absolute px-4 lg:px-0 bottom-[18.12svh] top-auto 3xl:top-[48svh] z-10"
                        data-scroll
                        data-scroll-speed="2"
                    >
                        <H1>
                            King-of-Saxony
                            <br />
                            Bird-of-Paradise
                        </H1>
                    </div>
                    <div
                        className="absolute hidden lg:flex 3xl:top-[69.7svh]  justify-between w-2/4 z-10"
                        data-scroll
                        data-scroll-speed="1"
                    >
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
                        <MainButton aklass="" link="">
                            Click me
                        </MainButton>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6 order-first lg:order-last px-[40px] lg:px-0">
                    <div className="top-[8.42svh] relative">
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
                    </div>
                    {/* <CoverImage
                        src={Hero.src}
                        mobileSrc={Hero.src}
                        alt="Cover Background"
                        klasse={"absolute top-[8.42svh]"}
                        style={{ aspectRatio: "0.93/1" }}
                        className="w-full relative top-[8.42svh]"
                    /> */}
                </div>
            </SectionContainer>
            <div
                data-scroll
                data-scroll-speed="7"
                className="bg-primaryColor-200 absolute w-full 3xl:w-[13.64svw] h-[25svh] 3xl:h-[59.9svh] 3xl:left-[-2.97svw] top-[25svh] 3xl:top-[19svh]"
            ></div>
        </>
    );
};

export default MainHeroSection;

// data-scroll data-scroll-speed="3"
