import React, { useState, useRef, useEffect } from "react";

//SECTIONS
import MainHeroSection from "../sections/mainHeroSimple";
import CoursesOverview from "../sections/coursesOverview";
import BioOverview from "../sections/bioOverview";
import GradientDiv from "../components/layout/gradientDiv";

//LAYOUT
import MainContainer from "../components/layout/mainContainer";

export default function Home() {
    // const containerRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <>
                <MainContainer id="main-container">
                    <MainHeroSection />
                </MainContainer>
                {/* <GradientDiv /> */}
                <div className="block h-48"></div>
                <div className="bg-primaryColor-50 w-full relative z-20">
                    <div className="bg-primaryColor-50 w-full container mx-auto">
                        <CoursesOverview />
                    </div>
                </div>
                <CoursesOverview />
                {/* More sections */}
                {/* <BioOverview /> */}
                <MainContainer>
                    <CoursesOverview />
                </MainContainer>
            </>
        </>
    );
}
