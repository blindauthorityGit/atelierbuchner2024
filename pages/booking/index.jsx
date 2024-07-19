import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router"; // Step 1: Import useRouter

// SANITY
import client from "../../client";

//SECTIONS

//LAYOUT
import MainContainer from "../../components/layout/mainContainer";
import GallerySection from "../../sections/gallery";
import MainBooking from "../../sections/booking/mainBooking";
// import GradientDiv from "../components/layout/gradientDiv";

//ROUTER

export default function Booking({ data }) {
    const containerRef = useRef(null);

    const router = useRouter(); // Step 2: Use useRouter hook

    // Step 3: Create a state for the router parameter (e.g., 'id')
    const [paramState, setParamState] = useState(null);

    useEffect(() => {
        console.log(data);
    }, [data]);

    useEffect(() => {
        // Assuming the parameter you're interested in is 'id'
        if (router.query.kurs) {
            setParamState(router.query.kurs);
            console.log(router.query.kurs);
            console.log("router.query.id");
        }
    }, [router.query]);

    const options = ["Sommerakademie", "Fühlingsakademie", "Winterakademie", "Herbstakademie"];

    return (
        <>
            <>
                {" "}
                {/* <SnapTest lenisRef={lenisRef}></SnapTest> */}
                <MainContainer>
                    <MainBooking param={paramState} options={options} />
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
