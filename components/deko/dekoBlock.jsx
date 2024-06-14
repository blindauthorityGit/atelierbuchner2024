// components/DecorativeElement.js
import React from "react";
import { motion, useTransform } from "framer-motion";

const DecorativeElement = ({ scrollY, startPositions, endPositions }) => {
    // Define transformation for position and scale based on scroll progress
    const x = useTransform(scrollY, [0, 5000], [startPositions.x, endPositions.x]);
    const y = useTransform(scrollY, [0, 5000], [startPositions.y, endPositions.y]);
    const scale = useTransform(scrollY, [0, 5000], [startPositions.scale, endPositions.scale]);

    return <motion.div className="fixed bg-blue-500 w-20 h-20" style={{ x, y, scale }} />;
};

export default DecorativeElement;
