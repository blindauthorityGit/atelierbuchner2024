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
    const [columnsCount, setColumnsCount] = useState(4); // State for column count

    const imageRef = useRef(null);

    const openModal = (image, index) => {
        console.log(image, index);
        console.log(images.indexOf(image));
        setModalContent(<GalleryModal data={images} image={image} index={images.indexOf(image)}></GalleryModal>);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };
    // Distribute images into columns
    const distributeImagesToColumns = (images, columnsCount) => {
        const columns = Array.from({ length: columnsCount }, () => []); // Create empty arrays for each column
        images.forEach((image, index) => {
            const columnIndex = index % columnsCount; // Assign each image to a column in a round-robin fashion
            columns[columnIndex].push(image);
        });
        return columns;
    };

    // Set columns based on screen size
    useEffect(() => {
        const updateColumnsCount = () => {
            if (window.innerWidth < 640) {
                setColumnsCount(2); // Mobile - 1 column
            } else if (window.innerWidth >= 640 && window.innerWidth < 1024) {
                setColumnsCount(2); // Tablet - 2 columns
            } else if (window.innerWidth >= 1024 && window.innerWidth < 1920) {
                setColumnsCount(4); // Tablet - 2 columns
            } else {
                setColumnsCount(6); // Desktop - 4 columns
            }
        };

        // Call the function on mount
        updateColumnsCount();

        // Add event listener to update on window resize
        window.addEventListener("resize", updateColumnsCount);

        // Clean up event listener on unmount
        return () => window.removeEventListener("resize", updateColumnsCount);
    }, []);

    // Create columns with distributed images
    const columns = distributeImagesToColumns(images, columnsCount);

    return (
        <>
            <SectionContainer klasse="gap-8 grid-rows-[auto_1fr] py-16 lg:py-20" fullHeight>
                {/* <div className="col-span-12 lg:col-span-6 lg:order-first relative">
                    <div className="px-4 hidden lg:block lg:px-16 bottom-[18.12svh] top-auto 3xl:top-[48svh] z-30">
                        <H1 klasse="z-20 relative">Galerie</H1>
                    </div>
                    <div className="bg-primaryColor-100 z-0 absolute top-[5svh] left-[20svw] w-[40svw] h-[25svh] 3xl:w-[10.83svw] 3xl:h-[25svh] 3xl:left-[0] 3xl:top-[13svh]"></div>
                </div> */}
                <div className="grid col-span-12 grid-cols-12 px-2 lg:px-16 gap-2 lg:gap-2">
                    {columns.map((columnImages, columnIndex) => (
                        <div key={columnIndex} className="col-span-6 lg:col-span-3 3xl:col-span-2">
                            {columnImages.map((image, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => openModal(image, index)}
                                >
                                    <CoverImage
                                        src={urlFor(image.image).url()}
                                        mobileSrc={urlFor(image.image).url()}
                                        alt="Gallery Image"
                                        className="w-full h-auto block relative mb-2"
                                        priority={true}
                                        style={{ aspectRatio: image.aspect_ratio.replace("_", " / ") }}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    ))}
                </div>
            </SectionContainer>
        </>
    );
};

export default Gallery;
// data-scroll data-scroll-speed="3"
