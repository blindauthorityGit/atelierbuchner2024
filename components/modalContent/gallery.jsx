import React, { useState, useEffect } from "react";

//COMPS
import { GalleryElement } from "../swiper";

//FUNCTIONS
import urlFor from "../../functions/urlFor";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Navigation, Scrollbar } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar"; // Make sure this is imported

const GalleryModal = ({ data, image, index }) => {
    useEffect(() => {
        console.log(data, image, index);
    }, []);

    const [swiper, setSwiper] = useState(null);
    const [isLastSlideLeft, setIsLastSlideLeft] = useState(true);
    const [isLastSlideRight, setIsLastSlideRight] = useState(false);

    useEffect(() => {
        if (swiper && index !== null) {
            swiper.slideTo(index, 0); // Jump to the selected slide immediately without transition
        }
    }, [swiper, index]);
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-12 left">
                <Swiper
                    // install Swiper modules
                    modules={[Pagination, Navigation, A11y, Scrollbar]}
                    slidesPerView={1}
                    lazy
                    // pagination={{ clickable: true, dynamicBullets: true }}
                    onSwiper={(swiper) => {
                        {
                            setSwiper(swiper);
                        }
                    }}
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => {
                        // handleNav();
                    }}
                    className="h-full eventSlider"
                    // style={{ paddingBottom: "3.75rem!important" }}
                    breakpoints={{}}
                >
                    {/* <div className="absolute z-10 bottom-8 right-8 flex space-x-4">
                        <GeneralNavButton direction="left"></GeneralNavButton>
                        <GeneralNavButton></GeneralNavButton>
                    </div> */}
                    {data.map((e, i) => {
                        return (
                            <SwiperSlide key={`viewAllSlide${i}`} className="relative">
                                <div className="bg-primaryColor-100 p-2 h-[60svh]">
                                    <GalleryElement
                                        aspectRatio={e.aspect_ratio.replace("_", " / ")}
                                        image={urlFor(e.image).url()}
                                        mobileImage={urlFor(e.image).url()}
                                    ></GalleryElement>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
            <div className="col-span-12 right"></div>
        </div>
    );
};

export default GalleryModal;
