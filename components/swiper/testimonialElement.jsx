import React from "react";
import { CoverImage } from "../images";

const TestimonialElement = ({ image, mobileImage, text }) => {
    return (
        <div>
            <div className="hidden lg:block lg:col-span-1"></div>
            <motion.div
                className="col-span-12 lg:col-span-7 pt-16 h-auto z-10 xl:pr-8 relative xl:pl-36"
                initial="hidden"
                whileInView="visible"
                variants={slideInFromLeft(0.2)}
                viewport={{ once: true }}
            >
                <div className="mix-blend-multiply opacity-70">
                    <motion.div
                        className=" h-auto z-10 relative opacity-80"
                        initial="hidden"
                        whileInView="visible"
                        variants={slideInFromLeft(0.2)}
                        viewport={{ once: true }}
                    >
                        <CoverImage
                            src={image.src}
                            mobileSrc={mobileImage.src}
                            alt="Cover Background"
                            klasse={""}
                            // style={{ }}
                            className=" !aspect-[16/9] lg:!aspect-[4/3]"
                        />
                    </motion.div>
                </div>
            </motion.div>
            <div className="col-span-12 lg:col-span-4 pt-4 flex flex-col justify-center">{text}</div>
        </div>
    );
};

export default TestimonialElement;
