import React, { useState, useRef, useEffect } from "react";
import SectionContainer from "../../components/layout/sectionContainer";
import { BasicElement } from "../../components/swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Navigation } from "swiper";
import { EffectCreative } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

const SwiperGallery = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <SectionContainer klasse="gap-8 pb-36 px-4 ">
            <Swiper
                effect={"creative"}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                    },
                    next: {
                        translate: ["100%", 0, 0],
                    },
                }}
                modules={[Pagination, Navigation, A11y, EffectCreative]}
                slidesPerView={1.15}
                lazy
                spaceBetween={"8px"}
                pagination={{ clickable: true, dynamicBullets: true }}
                onSwiper={(swiper) => setActiveIndex(swiper.activeIndex)}
                onSlideChange={(swiper) => {
                    console.log(swiper.activeIndex);
                    setActiveIndex(swiper.activeIndex);
                }}
                className="h-full w-full eventSlider relative col-span-12 min-h-[485px]"
                style={{ paddingBottom: "3.75rem!important" }}
            >
                {data.map((e, i) => (
                    <SwiperSlide key={`viewAllSlide${i}`} className="relative !flex flex-col justify-end">
                        <div
                            className={`transition-all duration-500 ${
                                activeIndex === i
                                    ? "aspect-ratio-16/9 transform scale-105"
                                    : "aspect-ratio-16/6 transform scale-100"
                            }`}
                        >
                            <BasicElement aspectRatio={activeIndex === i ? "16/9" : "16/6"} image={e} mobileImage={e} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </SectionContainer>
    );
};

export default SwiperGallery;
