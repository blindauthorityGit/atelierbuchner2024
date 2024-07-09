import React, { useRef, useEffect } from "react";

// SANITY
import client from "../../client";

//SECTIONS

//LAYOUT
import MainContainer from "../../components/layout/mainContainer";
import GallerySection from "../../sections/gallery";
import HeroSection from "../../sections/hero";
import SnapTest from "../../sections/snapSections";

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
                <MainContainer>
                    <HeroSection />
                    <GallerySection images={data}></GallerySection>
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
