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

//COMPS
import { GeneralNavButton } from "../../components/buttons";

//ASSETS
import ArrowBtn from "../../assets/icons/arrowButton.svg";

//HOOKS
import useDimension from "../../hooks/useDimension";

const Testimonials = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null); // Create a ref to store the Swiper instance
    const { width, height } = useDimension();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(width <= 420);
    }, [width]);

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
        <SectionContainer klasse="lg:gap-8 mb-36 px-4 relative">
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
                className="h-full w-full eventSlider relative col-span-12 min-h-[440px] lg:min-h-[890px] overflow-hidden"
                style={{ paddingBottom: "1.75rem!important" }}
                onInit={(swiper) => (swiperRef.current = swiper)} // Initialize
            >
                {data.map((e, i) => (
                    <SwiperSlide key={`viewAllSlide${i}`} className="relative !flex flex-col justify-end">
                        <div
                            className={`transition-all duration-500 ${
                                activeIndex === i
                                    ? "aspect-ratio-16/9 transform scale-100 border-r-8 border-[#f7f7f5]"
                                    : activeIndex + 1 === i
                                    ? "aspect-ratio-16/9 transform scale-100 border-r-8 opacity-50 grayscale border-[#f7f7f5] "
                                    : "aspect-ratio-16/6 transform scale-100 opacity-0 grayscale"
                            }`}
                        >
                            <TestimonialElement></TestimonialElement>
                        </div>
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
        </SectionContainer>
    );
};

export default Testimonials;
