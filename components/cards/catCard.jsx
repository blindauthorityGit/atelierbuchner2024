import React, { useState } from "react";
import { motion } from "framer-motion";

const CatCard = ({ klasse, title, subline, image, speed, ...props }) => {
    // State to track hover status
    const [isHovered, setIsHovered] = useState(false);

    // Variants for the child animation
    const hovering = {
        initial: { height: "0%" },
        animate: { height: "45%" },
    };

    return (
        <motion.div
            className={`${klasse}  bg-center bg-no-repeat relative overflow-hidden h-full`}
            {...props}
            style={{ backgroundImage: `url(${image})` }}
            onHoverStart={() => setIsHovered(true)} // Update state to true when hovered
            onHoverEnd={() => setIsHovered(false)} // Update state to false when not hovered
            initial={{ filter: "grayscale(100%)", scale: 1, backgroundSize: "150%", backgroundPosition: "center" }}
            whileHover={{ filter: "grayscale(0%)", scale: 1.15, backgroundSize: "125%" }}
            transition={{ duration: 0.6 }}
        >
            <motion.div
                className="absolute bottom-0 left-0 w-full bg-white"
                variants={hovering}
                animate={isHovered ? "animate" : "initial"} // Apply variants based on hover state
                transition={{ duration: 0.4, ease: "easeInOut" }}
            >
                <motion.div
                    className="text-black p-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isHovered ? { opacity: 1, y: 0 } : {}} // Control opacity based on hover state
                    transition={{ duration: 0.3, delay: 0.4, ease: "easeInOut" }}
                >
                    <div className="upperText text-xl font-bold">{title}</div>
                    <div className="lowerText text-md">{subline}</div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default CatCard;
