import React, { useRef } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
//DEKO
import DecorativeElement from "../components/deko/dekoBlock";
//SECTIONS
import MainHeroSection from "../sections/mainHero";
import CoursesOverview from "../sections/coursesOverview";
//LAYOUT
import MainContainer from "../components/layout/mainContainer";
//HOOKS
import { useLocomotiveScroll } from "../hooks/useLocomotiveScroll";
// CONTEXTS
import { ScrollProvider } from "../contexts/ScrollContext";

export default function Home() {
    const containerRef = useRef(null);
    const { scrollY } = useLocomotiveScroll(containerRef);

    // Define start and end positions for the decorative element
    const startPositions = { x: "0%", y: "0%", scale: 1 };
    const endPositions = { x: "80%", y: "80%", scale: 2 };

    return (
        <>
            {" "}
            <DecorativeElement scrollY={scrollY} startPositions={startPositions} endPositions={endPositions} />
            <MainContainer ref={containerRef} data-scroll-container>
                <MainHeroSection />
                <CoursesOverview />
                <CoursesOverview />
                {/* Add more sections here */}
            </MainContainer>
        </>
    );
}
