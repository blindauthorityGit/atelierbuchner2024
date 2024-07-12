import React from "react";
import { CoverImage } from "../images";
//TYPO
import { H1, H4, P } from "../../components/typography";

const Element = ({ image, headline, text, klasse }) => {
    return (
        <div className={`flex flex-col items-center justify-center ${klasse}`}>
            <div className="bg-primaryColor-100 mb-8 p-10 rounded-full flex items-center justify-center">
                <div className="inner rounded-full relative h-48 w-48">
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
            <H4>{headline}</H4>
            <P klasse="text-center">{text}</P>
        </div>
    );
};

export default Element;
