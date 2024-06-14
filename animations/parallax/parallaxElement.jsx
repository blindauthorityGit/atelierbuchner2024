// components/ParallaxElement.js
import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const ParallaxElement = ({ children, className, start, end }) => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [start, end], [0, -200]); // Increased range for visible effect

    return (
        <motion.div className={className} style={{ y }}>
            {children}
        </motion.div>
    );
};

export default ParallaxElement;
