import React from "react";
import { CoverImage } from "../images";

const BasicHeroElement = ({ image, mobileImage, aspectRatio }) => {
    return (
        <div>
            <CoverImage
                src={image.src}
                mobileSrc={mobileImage.src}
                alt="Cover Background"
                klasse={"absolute "}
                // style={{ }}
                className="w-full !aspect-[16/12] lg:!aspect-[846/652]"
            />
        </div>
    );
};

export default BasicHeroElement;
