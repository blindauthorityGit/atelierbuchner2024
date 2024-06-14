import React from "react";
import { CoverImage } from "../images";

const HeroElement = ({ image, mobileImage }) => {
    return (
        <div>
            <CoverImage
                src={Hero.src}
                mobileSrc={Hero.src}
                alt="Cover Background"
                klasse={"absolute top-[8.42svh]"}
                style={{ aspectRatio: "0.93/1" }}
                className="w-full "
            />
        </div>
    );
};

export default HeroElement;
