import React, { useRef, useEffect } from "react";

// SANITY
import client from "../../client";

//SECTIONS
import CourseList from "../../sections/courseList";
import BasicText from "../../sections/basicText";
import HeroSection from "../../sections/hero";
import BasicGallery from "../../sections/galleries/basicGallery";
import Benefits from "../../sections/benefits";
//LAYOUT
import MainContainer from "../../components/layout/mainContainer";

// import GradientDiv from "../components/layout/gradientDiv";
//ASSETS
import Bild1 from "../../assets/test/akadamie/1.JPG";
import Bild2 from "../../assets/test/akadamie/2.JPG";
import Bild3 from "../../assets/test/akadamie/3.JPG";
import Bild4 from "../../assets/test/akadamie/4.JPG";

import Benefit1 from "../../assets/test/benefits/1.JPG";
import Benefit2 from "../../assets/test/benefits/2.JPG";
import Benefit3 from "../../assets/test/benefits/3.JPG";
import Benefit4 from "../../assets/test/benefits/4.JPG";

export default function Courses({ data, lenisRef }) {
    const containerRef = useRef(null);

    const bilder = [Bild1, Bild2, Bild3, Bild4];

    const benefits = [
        {
            image: Benefit1,
            headline: "Für alle geeignet",
            text: "egal ob Anfänger oder Veteran,niemand muss sich ausgeschlossen fühlen",
        },
        {
            image: Benefit2,
            headline: "Individuelles Lernen",
            text: "egal ob Anfänger oder Veteran,niemand muss sich ausgeschlossen fühlen",
        },
        {
            image: Benefit3,
            headline: "Material vorhanden",
            text: "egal ob Anfänger oder Veteran,niemand muss sich ausgeschlossen fühlen",
        },
        {
            image: Benefit4,
            headline: "Atmosphäre",
            text: "egal ob Anfänger oder Veteran,niemand muss sich ausgeschlossen fühlen",
        },
    ];

    const ablauf = [
        {
            leftText: "1 - 2. Tag",
            rightText:
                "wir beginnen klassisch mit Bleistiftstudien und Rötel/Kohle oder Silberstift mit Weißhöhung auf getöntem Papier nach Art der Alten Meister.",
        },
        {
            leftText: "3 - 4. Tag",
            rightText: "wir wechseln auf  Farbe und versuchen expressive Porträts mit Pinsel und/oder Spachtel.",
        },
    ];
    const details = [
        {
            leftText: "Datum",
            rightText: "Februar - 06. Februar 2024",
        },
        {
            leftText: "Uhrzeit",
            rightText: "täglich 10:00 bis 17:00",
        },
        {
            leftText: "Ort",
            rightText: "Atelier Buchner | Prof. Sepp-Buchner-Straße 528 | 2823 Pitten",
        },
        {
            leftText: "Material",
            rightText: "kann vor Ort gekauft werden",
        },
        {
            leftText: "Kosten",
            rightText: "EUR 600,-",
        },
    ];

    useEffect(() => {
        console.log(data, BasicGallery);
    }, [data]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <>
                {" "}
                {/* <SnapTest lenisRef={lenisRef}></SnapTest> */}
                <MainContainer>
                    <HeroSection darken />
                    <BasicText klasse="xl:!pb-0"></BasicText>
                    <BasicGallery data={bilder}></BasicGallery>
                    <CourseList ablauf={ablauf} details={details}></CourseList>
                    <Benefits data={benefits}></Benefits>
                </MainContainer>
            </>
        </>
    );
}

export const getStaticProps = async (context) => {
    const res = await client.fetch(`*[_type == "Bild"] 
    `);
    const data = await res;

    return {
        props: {
            data,
        },
        revalidate: 1, // 10 seconds
    };
};
