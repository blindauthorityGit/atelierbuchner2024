import React from "react";
import { CoverImage, ContainImage } from "../images";

const GalleryElement = ({ image, mobileImage, aspectRatio }) => {
    return (
        <>
            <div className="relative">
                <div className="w-full lg:hidden block absolute z-20 opacity-100 bg-gradient-to-t from-darkGrey via-transparent to-transparent"></div>
                <ContainImage
                    src={image}
                    mobileSrc={mobileImage}
                    alt="Cover Background"
                    klasse={"max-h-[calc(60svh-2rem)]"}
                    style={{ aspectRatio: aspectRatio }}
                    className={`w-full max-h-[calc(60svh-2rem)] object-contain`}
                />
            </div>
        </>
    );
};

export default GalleryElement;
