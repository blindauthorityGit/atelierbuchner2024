import React, { useState, useRef, useEffect } from "react";
import SectionContainer from "../../components/layout/sectionContainer";
import { TestimonialElement } from "../../components/swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Navigation, Scrollbar } from "swiper";
import { EffectCreative } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import "swiper/css/scrollbar"; // Make sure this is imported
import { motion, useInView } from "framer-motion";
import { fadeIn, slideInFromLeft, slideInFromRight, slideInFromBottom } from "../../animations/variants";
//TYPO
import { H1, H2, P } from "../../components/typography";

//COMPS
import { GeneralNavButton } from "../../components/buttons";

//ASSETS
import ArrowBtn from "../../assets/icons/arrowButton.svg";
import Image from "../../assets/test/testimonials/44.jpg";

//HOOKS
import useDimension from "../../hooks/useDimension";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Testimonials = ({}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null); // Create a ref to store the Swiper instance
    const { width, height } = useDimension();
    const [isMobile, setIsMobile] = useState(false);

    const parallaxRef6 = useRef(null);

    useEffect(() => {
        // Ensure initial transform is set to neutral
        gsap.set(parallaxRef6.current, { y: 0 });

        const setupParallax = () => {
            gsap.fromTo(
                parallaxRef6.current,
                { y: 0 },
                {
                    y: "-70%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: parallaxRef6.current,
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

    useEffect(() => {
        setIsMobile(width <= 420);
    }, [width]);

    const data = [
        {
            image: Image,
            mobileImage: Image,
            headline: "War ja ganz ordentlich",
            text: "Die Kurse im Atelier Buchner haben meine kreative Seite völlig neu entfaltet. Die inspirierende Atmosphäre und die professionelle Anleitung haben es mir ermöglicht, meine künstlerischen Fähigkeiten zu entdecken und weiterzuentwickeln. Ich habe nicht nur viel gelernt, sondern auch wunderbare Menschen kennengelernt. Jeder Kurs ist ein Highlight und ich kann es kaum erwarten, wieder dabei zu sein!“",
            name: "- Gunborg S., Kursteilnehmerin",
        },
    ];

    // Handler to go to the next slide
    const goToNextSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    // Handler to go to the previous slide
    const goToPrevSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    useEffect(() => {
        if (swiperRef.current) {
            // You can access the swiper instance here if needed
            console.log("Swiper instance:", swiperRef.current);
        }
    }, []);

    return (
        <SectionContainer klasse="lg:gap-8 bg-primaryColor-50 pb-16 lg:pb-36 px-4 relative">
            <div className="relative grid grid-cols-12 col-span-12">
                <div className="hidden lg:block lg:col-span-1"></div>
                <motion.div
                    className="col-span-12 lg:col-span-7 pt-16 h-auto z-10 xl:pr-8 relative xl:pl-36"
                    initial="hidden"
                    whileInView="visible"
                    variants={slideInFromLeft(0.2)}
                    viewport={{ once: true }}
                >
                    <H2 klasse="lg:ml-[-8rem] lg:absolute z-20 top-24 left-8">
                        <div className="">Das sagen</div>
                        <div>unsere Teilnehmer</div>
                    </H2>
                </motion.div>
                <Swiper
                    effect={"creative"}
                    creativeEffect={{
                        prev: {
                            shadow: false,
                            translate: [0, 0, -400],
                        },
                        next: {
                            translate: ["100%", 0, 0],
                        },
                    }}
                    modules={[Pagination, Navigation, A11y, EffectCreative, Scrollbar]}
                    slidesPerView={1.15}
                    lazy
                    spaceBetween={"32px"}
                    // pagination={{ clickable: true, dynamicBullets: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => setActiveIndex(swiper.activeIndex)}
                    onSlideChange={(swiper) => {
                        console.log(swiper.activeIndex);
                        setActiveIndex(swiper.activeIndex);
                    }}
                    className="h-full w-full lg:mt-24 eventSlider relative col-span-12 min-h-[440px] lg:min-h-[590px] overflow-hidden"
                    style={{ paddingBottom: "1.75rem!important" }}
                    onInit={(swiper) => (swiperRef.current = swiper)} // Initialize
                >
                    {data.map((e, i) => (
                        <SwiperSlide key={`viewAllSlide${i}`} className="relative !grid grid-cols-12">
                            <TestimonialElement
                                headline={e.headline}
                                text={e.text}
                                name={e.name}
                                image={e.image}
                                mobileImage={e.mobileImage}
                            ></TestimonialElement>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="flex lg:absolute col-span-12 justify-end lg:right-8 mt-2 lg:mt-0 lg:bottom-[-0.5rem] z-20">
                    <GeneralNavButton
                        backgroundColor="#4E4840"
                        arrowColor="#F7F5F1"
                        direction="left"
                        onClick={goToPrevSlide}
                        height={isMobile ? "28px" : "56px"}
                        width={isMobile ? "28px" : "56px"}
                    />
                    <GeneralNavButton
                        backgroundColor="#4E4840"
                        arrowColor="#F7F5F1"
                        onClick={goToNextSlide}
                        height={isMobile ? "28px" : "56px"}
                        width={isMobile ? "28px" : "56px"}
                    />
                </div>
                <div
                    ref={parallaxRef6}
                    className="bg-primaryColor-100 absolute top-[12svh] left-[20svw] w-[40svw] h-[25svh] 3xl:w-[10.83svw] 3xl:h-[15svh] 3xl:left-[0] 3xl:top-[22svh]"
                ></div>
            </div>
        </SectionContainer>
    );
};

export default Testimonials;
