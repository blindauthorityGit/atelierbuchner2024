import React from "react";
import { CoverImage } from "../images";
//TYPO
import { H1, H4, P } from "../../components/typography";

const Element = ({ image, headline, text, klasse }) => {
    return (
        <div className={`flex flex-col items-center justify-center ${klasse}`}>
            <div className="bg-primaryColor-100 mb-4 lg:mb-8 p-4 lg:p-10 rounded-full flex items-center justify-center">
                <div className="inner rounded-full relative w-36 h-36 lg:h-48 lg:w-48">
                    <CoverImage
                        src={image.src}
                        mobileSrc={image.src}
                        alt="Cover Background"
                        klasse={"absolute rounded-full"}
                        // style={{ }}
                        className="w-full rounded-full !aspect-[9/16] lg:!aspect-[1/1]"
                    />
                </div>
            </div>
            <H4 klasse="!mb-2 lg:!mb-6">{headline}</H4>
            <P klasse="text-center">{text}</P>
        </div>
    );
};

export default Element;
