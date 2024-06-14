import React from "react";

//COMPS
import MainHero from "../../components/hero/mainHero";
import SectionContainer from "../../components/layout/sectionContainer";
import { CoverImage } from "../../components/images";
import { MainButton } from "../../components/buttons";
//TYPO
import { H1, P } from "../../components/typography";
//ASSETS
import Hero from "../../assets/test/hero2.jpg";
import HeroGold from "../../assets/test/hero3.jpg";
import Chevron from "../../assets/icons/chevron.svg";
//FUNCTIONS
// import urlFor from "../../functions/urlFor";

// ANIMATION
import ParallaxElement from "../../animations/parallax/parallaxElement";

const MainHeroSection = () => {
    const start = 0;
    const end = 1000; // Adjust these values as needed for your parallax effect

    return (
        <>
            <SectionContainer fullHeight>
                <div className="col-span-6 ">
                    <div className="absolute 3xl:top-[48svh] z-10" data-scroll data-scroll-speed="2">
                        <H1>
                            King-of-Saxony
                            <br />
                            Bird-of-Paradise
                        </H1>
                    </div>
                    <div
                        className="absolute 3xl:top-[69.7svh] flex justify-between w-2/4 z-10"
                        data-scroll
                        data-scroll-speed="1"
                    >
                        <P>
                            Step into a world of art, where creativity and expression come
                            <br /> together tocreate a symphony of beauty
                        </P>
                        <div className="flex">
                            <img src={Chevron.src} className="mr-16" alt="" />
                            <img src={Chevron.src} className="rotate-180" alt="" />
                        </div>
                    </div>
                    <MainButton aklass="3xl:top-[87.7svh] 3xl:left-[25svw] relative" link="">
                        Click me
                    </MainButton>
                </div>
                <div className="col-span-6">
                    <CoverImage
                        src={Hero.src}
                        mobileSrc={Hero.src}
                        alt="Cover Background"
                        klasse={"absolute top-[8.42svh]"}
                        style={{ aspectRatio: "0.93/1" }}
                        className="w-full relative top-[8.42svh]"
                    />
                </div>
            </SectionContainer>
            <div
                data-scroll
                data-scroll-speed="7"
                className="bg-primaryColor-200 absolute 3xl:w-[13.64svw] 3xl:h-[59.9svh] 3xl:left-[-2.97svw] 3xl:top-[19svh]"
            ></div>
        </>
    );
};

export default MainHeroSection;

// data-scroll data-scroll-speed="3"
