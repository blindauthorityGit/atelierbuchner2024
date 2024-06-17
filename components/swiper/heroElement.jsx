import React from "react";
import { CoverImage } from "../images";

const HeroElement = ({ image, mobileImage, aspectRatio }) => {
    return (
        <div>
            <CoverImage
                src={image.src}
                mobileSrc={mobileImage.src}
                alt="Cover Background"
                klasse={"absolute "}
                // style={{ }}
                className="w-full !aspect-[0.72/1] lg:!aspect-[0.93/1]"
            />
        </div>
    );
};

export default HeroElement;
