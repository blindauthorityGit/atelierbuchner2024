import React, { useState, useRef, useEffect } from "react";

//SECTIONS
import MainHeroSection from "../../sections/mainHeroSimple";
import CourseHero from "../../sections/hero/courseHero";
import CoursesOverview from "../../sections/coursesOverview";
import BioOverview from "../../sections/bioOverview";
import GradientDiv from "../../components/layout/gradientDiv";
import IntroText from "../../sections/introText";
import HighlightText from "../../sections/highlightText";
import SwiperGallery from "../../sections/swiperGallery";
import FAQs from "../../sections/faqs";

//LAYOUT
import MainContainer from "../../components/layout/mainContainer";

//ASSETS
//ASSETS
import Bild1 from "../../assets/test/kurs/1.jpg";
import Bild2 from "../../assets/test/kurs/2.jpg";
import Bild3 from "../../assets/test/kurs/3.jpg";
import Bild4 from "../../assets/test/kurs/4.jpg";

export default function Courses() {
    // const containerRef = useRef(null);

    const bilder2 = [Bild1, Bild2, Bild3, Bild4, Bild1, Bild2];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="bg-primaryColor-100 w-full relative z-20">
                <MainContainer id="main-container" klasse="bg-primaryColor-100">
                    <CourseHero />
                </MainContainer>{" "}
            </div>
            {/* <GradientDiv /> */}
            <div className="block h-20 lg:h-48 bg-primaryColor-100"></div>
            <div className="bg-primaryColor-50 w-full relative z-20">
                <div className="bg-primaryColor-50 w-full container mx-auto">
                    <IntroText></IntroText>
                </div>
            </div>
            <div className="bg-primaryColor-100 w-full relative z-20">
                <div className="bg-primaryColor-100 w-full container mx-auto">
                    <HighlightText></HighlightText>
                </div>
            </div>
            <div className="bg-primaryColor-50 w-full relative z-20">
                <MainContainer klasse="bg-primaryColor-50">
                    <CoursesOverview noBtn />
                    {/* <div className="lg:h-24"></div> */}
                    <FAQs></FAQs>
                    <SwiperGallery data={bilder2}></SwiperGallery>
                    <IntroText></IntroText>
                </MainContainer>
            </div>
        </>
    );
}
