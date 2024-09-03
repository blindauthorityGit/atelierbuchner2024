import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

//COMPS
import { GalleryElement } from "../swiper";
import { MainButton, GhostButton, GeneralNavButton } from "../../components/buttons";
import ArrowButton from "../../assets/icons/arrowButton.svg";

//FUNCTIONS
import urlFor from "../../functions/urlFor";

//TYPO
import { H1, H2, H3, P } from "../../components/typography";

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
    const [currentSlideData, setCurrentSlideData] = useState(data[index] || {});

    const [isLastSlideLeft, setIsLastSlideLeft] = useState(true);
    const [isLastSlideRight, setIsLastSlideRight] = useState(false);

    useEffect(() => {
        if (swiper && index !== null) {
            swiper.slideTo(index, 0);
            setCurrentSlideData(data[index]); // Set initial slide data
            // Jump to the selected slide immediately without transition
        }
    }, [swiper, index]);

    const handleSlideChange = (swiperInstance) => {
        const newIndex = swiperInstance.activeIndex;
        setCurrentSlideData(data[newIndex]);
    };

    const textVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 },
    };

    return (
        <div className="grid grid-cols-12 relative">
            <div className="col-span-12 left bg-primaryColor-0 m-[-1.5rem] p-6 ">
                <Swiper
                    // install Swiper modules
                    modules={[Pagination, Navigation, A11y, Scrollbar]}
                    slidesPerView={1.05}
                    lazy
                    // pagination={{ clickable: true, dynamicBullets: true }}
                    onSwiper={(swiper) => {
                        {
                            setSwiper(swiper);
                        }
                    }}
                    scrollbar={{ draggable: true }}
                    onSlideChange={handleSlideChange}
                    className="h-full eventSlider"
                    // style={{ paddingBottom: "3.75rem!important" }}
                    breakpoints={{}}
                >
                    <div className="absolute z-10 bottom-8 right-8 flex space-x-4">
                        <GeneralNavButton direction="left"></GeneralNavButton>
                        <GeneralNavButton></GeneralNavButton>
                    </div>
                    {data.map((e, i) => {
                        return (
                            <SwiperSlide key={`viewAllSlide${i}`} className="relative w-full h-full">
                                <>
                                    <div className="bg-primaryColor-0 p-2 h-[60svh] flex items-center w-full ">
                                        <GalleryElement
                                            aspectRatio={e.aspect_ratio.replace("_", " / ")}
                                            image={urlFor(e.image).url()}
                                            mobileImage={urlFor(e.image).url()}
                                        ></GalleryElement>
                                    </div>
                                </>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
            <div className="col-span-12 right text-center pt-8">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlideData.titel_Bild}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={textVariants}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                        <H3 klasse="!mb-0 mt-2 lg:mt-4">{currentSlideData.titel_Bild}</H3>
                        <P klasse="mt-2">
                            {currentSlideData.year} | {currentSlideData.dimensions}
                        </P>
                        <MainButton icon={ArrowButton} aklass="" klasse="w-[90svw] lg:w-auto mt-6" link="/gallery">
                            Alle Bilder
                        </MainButton>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default GalleryModal;
