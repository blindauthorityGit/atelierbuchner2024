import React from "react";
import { motion } from "framer-motion";

const CatCard = ({ klasse, title, subline, image, onHoverStart, onHoverEnd, ...props }) => {
    return (
        <motion.div
            className={`${klasse} bg-cover bg-center relative overflow-hidden`}
            {...props}
            style={{ backgroundImage: `url(${image})` }}
            onHoverStart={onHoverStart}
            onHoverEnd={onHoverEnd}
            initial={{ filter: "grayscale(100%)", scale: 1 }}
            whileHover={{ filter: "grayscale(0%)", scale: 1.1 }}
            transition={{ duration: 0.3 }}
        >
            <div className="text absolute bottom-4 left-4 text-white">
                <div className="upperText text-xl font-bold">{title}</div>
                <div className="lowerText text-md">{subline}</div>
            </div>
        </motion.div>
    );
};

export default CatCard;
