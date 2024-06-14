import React from "react";

//COMPS
import MainHero from "../../components/hero/mainHero";
import SectionContainer from "../../components/layout/sectionContainer";
import { CoverImage } from "../../components/images";
//TYPO
import { H1, P } from "../../components/typography";
//ASSETS
import Hero from "../../assets/test/hero2.jpg";
//FUNCTIONS
// import urlFor from "../../functions/urlFor";

//ANIMATION

const MainHeroSection = () => {
    return (
        <SectionContainer fullHeight>
            <div className="col-span-6">
                <H1 klasse="absolute 3xl:top-[50svh] z-10">
                    King-of-Saxony
                    <br />
                    Bird-of-Paradise
                </H1>
                <P klasse="absolute 3xl:top-[70.7svh]">
                    Step into a world of art, where creativity and expression come
                    <br /> together tocreate a symphony of beauty
                </P>
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
    );
};

export default MainHeroSection;
