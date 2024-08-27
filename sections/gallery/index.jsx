import React, { useState, useRef, useEffect } from "react";

//COMPS
import SectionContainer from "../../components/layout/sectionContainer";
import { CoverImage } from "../../components/images";
import { Modal } from "../../components/modal";

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

// ANIMATION
import ParallaxElement from "../../animations/parallax/parallaxElement";

const Gallery = ({ images }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagePosition, setImagePosition] = useState({});
    const imageRef = useRef(null);

    const openModal = (image, index) => {
        const rect = imageRef.current.getBoundingClientRect();
        setImagePosition(rect);
        setSelectedImage(image);
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
                    <div className="px-4 lg:px-16 bottom-[18.12svh] top-auto 3xl:top-[48svh] z-30">
                        <H1 klasse="z-20 relative">Galerie</H1>
                    </div>
                    <div
                        ref={parallaxRef7}
                        className="bg-primaryColor-100 z-0 absolute top-[5svh] left-[20svw] w-[40svw] h-[25svh] 3xl:w-[10.83svw] 3xl:h-[25svh] 3xl:left-[0] 3xl:top-[13svh]"
                    ></div>
                </div>
                <div className="grid col-span-12 grid-cols-12 px-2 lg:px-16 gap-6 lg:gap-16">
                    {images.map((image, index) => (
                        <div className="col-span-12 lg:col-span-4" key={index}>
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
                            <P className="mt-2">
                                {image.technik} | {image.dimensions} <br /> {image.year}
                            </P>
                        </div>
                    ))}
                </div>
            </SectionContainer>

            {isModalOpen && selectedImage && (
                <Modal onClose={closeModal}>
                    <motion.div
                        initial={{
                            top: imagePosition.top,
                            left: imagePosition.left,
                            width: imagePosition.width,
                            height: imagePosition.height,
                        }}
                        animate={{
                            top: "50%",
                            left: "50%",
                            width: "90vw", // Adjust as needed
                            height: "auto",
                            x: "-50%",
                            y: "-50%",
                        }}
                        transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
                        className="fixed z-50"
                    >
                        <CoverImage
                            src={urlFor(selectedImage.image).url()}
                            mobileSrc={urlFor(selectedImage.image).url()}
                            alt="Cover Background"
                            className="w-full h-full object-cover aspect-[1/1]"
                            priority={true}
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.3 }}
                        className="modal-content"
                    >
                        {/* Add other modal content here */}
                        <button onClick={closeModal}>Close</button>
                    </motion.div>
                </Modal>
            )}
        </>
    );
};

export default Gallery;
// data-scroll data-scroll-speed="3"
