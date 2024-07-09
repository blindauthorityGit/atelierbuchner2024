import React, { useState, useRef, useEffect } from "react";

//SECTIONS
import MainHeroSection from "../sections/mainHero";
import CoursesOverview from "../sections/coursesOverview";
import BioOverview from "../sections/bioOverview";

//LAYOUT
import MainContainer from "../components/layout/mainContainer";

export default function Home() {
    // const containerRef = useRef(null);

    return (
        <>
            <>
                <MainContainer id="main-container">
                    <MainHeroSection />
                    <div className="block h-64"></div>
                    <CoursesOverview />
                    <CoursesOverview />
                    {/* More sections */}
                </MainContainer>
                <BioOverview />
                <MainContainer>
                    <CoursesOverview />
                </MainContainer>
            </>
        </>
    );
}
