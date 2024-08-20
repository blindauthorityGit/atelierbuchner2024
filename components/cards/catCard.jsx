import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

//HOOKS
import useDimension from "../../hooks/useDimension";

const CatCard = ({ klasse, title, subline, image, speed, ...props }) => {
    // State to track hover status
    const [isHovered, setIsHovered] = useState(false);
    const { width } = useDimension();

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(width <= 420);
        console.log(width <= 420);
    }, [width]);

    // Variants for the child animation
    const hovering = {
        initial: { height: "0%" },
        animate: { height: "33%" },
    };

    return (
        <div className={`${klasse} relative h-full overflow-hidden`} {...props}>
            <motion.div
                className="w-full h-full bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${image})` }}
                onHoverStart={() => setIsHovered(true)} // Update state to true when hovered
                onHoverEnd={() => setIsHovered(false)} // Update state to false when not hovered
                initial={{
                    filter: !isMobile ? "grayscale(0%)" : null,
                    scale: 1,
                    backgroundSize: "cover",
                }}
                whileHover={{ filter: "grayscale(100%)", scale: 1.15 }}
                transition={{ duration: 0.6 }}
            >
                <motion.div
                    className="absolute bottom-0 left-0 w-full bg-darkGrey text-primaryColor-100"
                    variants={hovering}
                    animate={isHovered ? "animate" : "initial"} // Apply variants based on hover state
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                    <motion.div
                        className="text-primaryColor-100 p-8 px-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isHovered ? { opacity: 1, y: 0 } : {}} // Control opacity based on hover state
                        transition={{ duration: 0.3, delay: 0.4, ease: "easeInOut" }}
                    >
                        <div className="upperText text-xl font-bold">{title}</div>
                        <div className="lowerText text-md">{subline}</div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default CatCard;
