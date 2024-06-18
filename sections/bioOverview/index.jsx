// sections/BioOverview.js
import React, { useState, useRef, useEffect, forwardRef } from "react";
import { motion, useTransform } from "framer-motion";

// COMPS
import SectionContainer from "../../components/layout/SectionContainer";

// ANIMATION
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BioOverview = forwardRef(({ onScroll, scrollY }, ref) => {
    // Interpolate background color based on scrollY value
    const backgroundColor = useTransform(scrollY, [0, 1000], ["#ffffff", "#000000"]);

    return (
        <SectionContainer fullHeight>
            <motion.div
                className={`w-full h-full`}
                style={{ backgroundColor }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
            >
                <img src="path_to_image.jpg" alt="Description" className="image max-w-full mb-4" />
                <div className="text text-white" data-scroll-section>
                    <h1 className="text-4xl font-bold">Title</h1>
                    <p className="text-xl">Description text goes here...</p>
                    {/* <div data-scroll data-scroll-class="in-view">
                        Animate me when in view
                    </div> */}
                </div>
            </motion.div>
        </SectionContainer>
    );
});

export default BioOverview;
