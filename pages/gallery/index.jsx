import React, { useRef, useEffect } from "react";

// SANITY
import client from "../../client";

//SECTIONS

//LAYOUT
import MainContainer from "../../components/layout/mainContainer";
import GallerySection from "../../sections/gallery";
import HeroSection from "../../sections/hero";
// import GradientDiv from "../components/layout/gradientDiv";

export default function Gallery({ data, lenisRef }) {
    const containerRef = useRef(null);

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <>
            <>
                {" "}
                {/* <SnapTest lenisRef={lenisRef}></SnapTest> */}
                {/* <HeroSection /> */}
                <GallerySection images={data.sort((a, b) => b.year - a.year)}></GallerySection>
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
