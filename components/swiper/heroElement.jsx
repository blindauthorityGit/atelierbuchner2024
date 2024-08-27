import React from "react";
import { CoverImage } from "../images";

const HeroElement = ({ image, mobileImage, aspectRatio }) => {
    return (
        <div className="relative">
            <div className="w-full lg:hidden block absolute z-20 opacity-100 bg-gradient-to-t from-darkGrey via-transparent to-transparent"></div>
            <CoverImage
                src={image.src}
                mobileSrc={mobileImage.src}
                alt="Cover Background"
                klasse={"absolute "}
                // style={{ }}
                className="w-full !aspect-[9/16] lg:!aspect-[1/0.88] 3xl:!aspect-[1/0.94]"
            />
        </div>
    );
};

export default HeroElement;
