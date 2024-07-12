import React from "react";
import { motion } from "framer-motion";
import { H1, P } from "../typography";

const MenuModal = () => {
    const ARTWORKS = "ARTWORKS".split("");
    const KURSE = "KURSE".split("");
    const BLOG = "BLOG".split("");
    const ABOUT = "ABOUT".split("");
    const KONTAKT = "KONTAKT".split("");
    const SHOP = "SHOP".split("");

    const characterVariants = {
        initial: {
            opacity: 0,
            y: 50,
        },
        animate: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.05, duration: 0.3, ease: "easeOut" },
        }),
    };

    const lineVariants = {
        hidden: {
            scaleX: 0,
            originX: 0,
        },
        visible: {
            scaleX: 1,
            originX: 0,
            transition: {
                duration: 1,
                ease: "easeInOut",
            },
        },
    };

    const renderCharacter = (char, index, isShop) => (
        <motion.span
            key={index}
            custom={index}
            variants={characterVariants}
            initial="initial"
            animate="animate"
            className={`relative inline-block ${isShop ? "text-primaryColor-600" : ""}`}
        >
            {char}
        </motion.span>
    );

    const renderLine = () => (
        <motion.span
            variants={lineVariants}
            initial="hidden"
            animate="hidden"
            whileHover="visible"
            exit="hidden"
            className="absolute bottom-0 left-0 h-1 bg-primaryColor-300"
            style={{ width: "100%" }}
        />
    );

    return (
        <div className="container mx-auto grid grid-cols-12 col-span-12">
            <div className="col-span-6 flex flex-col justify-end">
                <P klasse="w-2/4 mb-8">
                    Step into a world of art, where creativity and expression come together to create a symphony of
                    beauty
                </P>
            </div>
            <div className="col-span-6 flex flex-col justify-end">
                <motion.div variants={lineVariants} className="relative inline-block" whileHover="visible">
                    <H1 className="relative inline-block">
                        {ARTWORKS.map((char, index) => renderCharacter(char, index))}
                        {renderLine()}
                    </H1>
                </motion.div>
                <motion.div variants={lineVariants} className="relative inline-block" whileHover="visible">
                    <H1 className="relative inline-block">
                        {KURSE.map((char, index) => renderCharacter(char, index))}
                        {renderLine()}
                    </H1>
                </motion.div>
                <motion.div variants={lineVariants} className="relative inline-block" whileHover="visible">
                    <H1 className="relative inline-block">
                        {ABOUT.map((char, index) => renderCharacter(char, index))}
                        {renderLine()}
                    </H1>
                </motion.div>
                <motion.div variants={lineVariants} className="relative inline-block" whileHover="visible">
                    <H1 className="relative inline-block">
                        {BLOG.map((char, index) => renderCharacter(char, index))}
                        {renderLine()}
                    </H1>
                </motion.div>
                <motion.div variants={lineVariants} className="relative inline-block" whileHover="visible">
                    <H1 className="relative inline-block">
                        {KONTAKT.map((char, index) => renderCharacter(char, index))}
                        {renderLine()}
                    </H1>
                </motion.div>
                <motion.div
                    variants={lineVariants}
                    className="relative inline-block text-primaryColor-600"
                    whileHover="visible"
                >
                    <H1 className="relative inline-block">
                        {SHOP.map((char, index) => renderCharacter(char, index, true))}
                        {renderLine()}
                    </H1>
                </motion.div>
            </div>
        </div>
    );
};

export default MenuModal;
