import React, { useState, useRef, useEffect } from "react";

//SECTIONS
import MainHeroSection from "../../sections/mainHeroSimple";
import CourseHero from "../../sections/hero/courseHero";
import CoursesOverview from "../../sections/coursesOverview";
import BioOverview from "../../sections/bioOverview";
import GradientDiv from "../../components/layout/gradientDiv";

//LAYOUT
import MainContainer from "../../components/layout/mainContainer";

export default function Courses() {
    // const containerRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {" "}
            <div className="bg-primaryColor-100 w-full relative z-20">
                <MainContainer id="main-container" klasse="bg-primaryColor-100">
                    <CourseHero />
                </MainContainer>{" "}
            </div>
            {/* <GradientDiv /> */}
            <div className="block h-48 bg-primaryColor-100"></div>
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
    );
}
