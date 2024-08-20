import React from "react";
import { CoverImage } from "../images";

const BasicElement = ({ image, mobileImage, aspectRatio }) => {
    return (
        <div>
            <CoverImage
                src={image.src}
                mobileSrc={mobileImage.src}
                alt="Cover Background"
                klasse={" "}
                style={{ aspectRatio: aspectRatio }}
                className="w-full transition-all duration-200"
            />
        </div>
    );
};

export default BasicElement;
