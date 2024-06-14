// components/AnimatedHeading.js
import React from "react";
import { motion } from "framer-motion";

const AnimatedHeading = ({ text, className = "", delay = 0 }) => {
    const letters = text.split("");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: delay + 0.04 * i },
        }),
    };

    const child = {
        hidden: {
            opacity: 0,
            y: 20,
            x: 10,
            skewX: "10deg",
            skewY: "-10deg",
            rotate: "10deg",
            scale: 0.8,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            skewX: "0deg",
            skewY: "0deg",
            rotate: "0deg",
            scale: 1,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div variants={container} initial="hidden" animate="visible">
            {letters.map((letter, index) => (
                <motion.span key={index} variants={child}>
                    {letter}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default AnimatedHeading;
