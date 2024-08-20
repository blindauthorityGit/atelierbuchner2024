import React from "react";
import { CoverImage } from "../images";
import { motion } from "framer-motion";

import { P, H3 } from "../typography";

import Quotes from "../../assets/icons/quotes.svg";

const TestimonialElement = ({ image, mobileImage, text, name, headline }) => {
    return (
        <>
            <div className="hidden lg:block lg:col-span-1"></div>
            <motion.div
                className="col-span-12 lg:col-span-6 pt-4 lg:pt-16 h-auto z-10 xl:pr-8 relative "
                initial="hidden"
                whileInView="visible"
                // variants={slideInFromLeft(0.2)}
                viewport={{ once: true }}
            >
                <div className="mix-blend-multiply grayscale">
                    <motion.div
                        className=" h-auto z-10 relative opacity-80"
                        initial="hidden"
                        whileInView="visible"
                        // variants={slideInFromLeft(0.2)}
                        viewport={{ once: true }}
                    >
                        <CoverImage
                            src={image.src}
                            mobileSrc={mobileImage.src}
                            alt="Cover Background"
                            klasse={""}
                            // style={{ }}
                            className=" !aspect-[4/3] lg:!aspect-[4/3]"
                        />
                    </motion.div>
                </div>
            </motion.div>
            <div className="col-span-12  lg:col-span-5 pt-4 flex flex-col justify-center lg:pl-24">
                <div className="relative">
                    <H3 klasse="mb-2">{headline}</H3>
                    <P>{text}</P>
                    <P klasse="font-bold mt-6">{name}</P>
                    <img className="absolute top-0 left-[-4rem]" src={Quotes.src} alt="" />
                </div>
            </div>
        </>
    );
};

export default TestimonialElement;
