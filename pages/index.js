import React, { useRef } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
//DEKO
import DecorativeElement from "../components/deko/dekoBlock";
//SECTIONS
import MainHeroSection from "../sections/mainHero";
import CoursesOverview from "../sections/coursesOverview";
import BioOverview from "../sections/bioOverview";
import TestSection from "../sections/test";

//LAYOUT
import MainContainer from "../components/layout/mainContainer";
//HOOKS
import { useLocomotiveScroll } from "../hooks/useLocomotiveScroll";

export default function Home() {
    const containerRef = useRef(null);
    const { scrollY } = useLocomotiveScroll(containerRef);

    const handleScroll = (callback) => {
        if (!containerRef.current) return;
        containerRef.current.addEventListener("scroll", callback);
    };

    // Define start and end positions for the decorative element
    const startPositions = { x: "0%", y: "0%", scale: 1 };
    const endPositions = { x: "80%", y: "80%", scale: 2 };

    return (
        <>
            {" "}
            <DecorativeElement scrollY={scrollY} startPositions={startPositions} endPositions={endPositions} />
            <MainContainer ref={containerRef}>
                <MainHeroSection />
                <div className="block h-64"></div>
                <CoursesOverview />
                <CoursesOverview />
                {/* <TestSection /> */}

                {/* <BioOverview scrollY={scrollY} /> */}
                {/* Add more sections here */}
            </MainContainer>
        </>
    );
}
