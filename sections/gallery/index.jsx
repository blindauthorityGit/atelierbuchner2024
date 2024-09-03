import React, { useState, useRef, useEffect } from "react";

//COMPS
import SectionContainer from "../../components/layout/sectionContainer";
import { CoverImage } from "../../components/images";
import GalleryModal from "../../components/modalContent/gallery";

//TYPO
import { H1, H2, H3, P } from "../../components/typography";

// ANIMATION
import { motion } from "framer-motion";
import Parallax from "../../components/parallax";

//FUNCTIONS
import urlFor from "../../functions/urlFor";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

//HOOKS
import useDimension from "../../hooks/useDimension";

//FUNCTIONS
// import urlFor from "../../functions/urlFor";

import useStore from "../../store/store";

const Gallery = ({ images }) => {
    const isModalOpen = useStore((state) => state.isModalOpen);
    const setIsModalOpen = useStore((state) => state.setIsModalOpen);
    const setModalContent = useStore((state) => state.setModalContent);

    const imageRef = useRef(null);

    const openModal = (image, index) => {
        console.log(image, index);
        setModalContent(<GalleryModal data={images} image={image} index={index}></GalleryModal>);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    const parallaxRef7 = useRef(null);

    useEffect(() => {
        // Ensure initial transform is set to neutral
        gsap.set(parallaxRef7.current, { y: 0 });

        const setupParallax = () => {
            gsap.fromTo(
                parallaxRef7.current,
                { y: 0 },
                {
                    y: "-50%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: parallaxRef7.current,
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
            <SectionContainer klasse="gap-8 grid-rows-[auto_1fr] py-20 lg:py-36" fullHeight>
                <div className="col-span-12 lg:col-span-6 lg:order-first relative">
                    <div className="px-4 hidden lg:block lg:px-16 bottom-[18.12svh] top-auto 3xl:top-[48svh] z-30">
                        <H1 klasse="z-20 relative">Galerie</H1>
                    </div>
                    <div
                        ref={parallaxRef7}
                        className="bg-primaryColor-100 z-0 absolute top-[5svh] left-[20svw] w-[40svw] h-[25svh] 3xl:w-[10.83svw] 3xl:h-[25svh] 3xl:left-[0] 3xl:top-[13svh]"
                    ></div>
                </div>
                <div className="grid col-span-12 grid-cols-12 px-2 lg:px-16 gap-2 lg:gap-16">
                    {images.map((image, index) => (
                        <div className="col-span-6 lg:col-span-4" key={index}>
                            <motion.div
                                className={`parallax-item`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
                                }}
                                whileTap={{
                                    scale: 0.95,
                                    transition: { duration: 0.1 },
                                }}
                                onClick={() => openModal(image, index)}
                                ref={imageRef}
                            >
                                <CoverImage
                                    src={urlFor(image.image).url()}
                                    mobileSrc={urlFor(image.image).url()}
                                    alt="Cover Background"
                                    className={`w-full z-20 aspect-[4/3] lg:aspect-[4/4] block relative mb-2 lg:mb-8 overflow-hidden`}
                                    priority={true}
                                />
                            </motion.div>
                            <H3 klasse="!mb-0 mt-2 lg:mt-4">{image.titel_Bild}</H3>
                            <P klasse="mt-2">
                                {image.technik} | {image.dimensions} <br /> {image.year}
                            </P>
                        </div>
                    ))}
                </div>
            </SectionContainer>
        </>
    );
};

export default Gallery;
// data-scroll data-scroll-speed="3"
