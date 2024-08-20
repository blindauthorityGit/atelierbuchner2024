import React, { useState, useRef, useEffect } from "react";

//COMPS
import SectionContainer from "../../components/layout/sectionContainer";
import { MainButtonNOLink } from "../../components/buttons";
//TYPO
import { H1, H2, P } from "../../components/typography";

// ANIMATION
import { motion, useInView } from "framer-motion";
import Parallax from "../../components/parallax";
import { fadeIn, slideInFromLeft, slideInFromRight, slideInFromBottom } from "../../animations/variants";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

//ASSETS
import ArrowButton from "../../assets/icons/arrowButton.svg";

//HOOKS
import useDimension from "../../hooks/useDimension";

//FUNCTIONS
// import urlFor from "../../functions/urlFor";

// ANIMATION
import ParallaxElement from "../../animations/parallax/parallaxElement";

const Newsletter = ({ klasse }) => {
    const parallaxRef7 = useRef(null);

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        // Ensure initial transform is set to neutral
        gsap.set(parallaxRef7.current, { y: 0 });

        const setupParallax = () => {
            gsap.fromTo(
                parallaxRef7.current,
                { y: 0 },
                {
                    y: "-70%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: parallaxRef7.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    },
                }
            );
        };

        // Use requestAnimationFrame to ensure the setup happens after the initial render
        requestAnimationFrame(() => {
            setupParallax();
            ScrollTrigger.refresh();
        });

        return () => {
            // Clean up the ScrollTrigger instance on unmount
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubscribe = async () => {
        setError("");
        if (!validateEmail(email)) {
            setError("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
            return;
        }

        try {
            // Example of sending data to Mailchimp API
            const response = await axios.post("/api/subscribe", { email }); // Replace with your actual Mailchimp API endpoint
            console.log(response.data);
            alert("Danke für Ihre Anmeldung!");
        } catch (error) {
            console.error("Error subscribing:", error);
            setError("Es gab ein Problem mit der Anmeldung. Bitte versuchen Sie es erneut.");
        }
    };

    return (
        <>
            <SectionContainer klasse={`gap-4 xl:gap-12 relative ${klasse} !bg-primaryColor-200 px-4 py-12 lg:py-36`}>
                <motion.div
                    className="col-span-12 lg:col-span-12 flex flex-col items-center justify-center pt-16 h-auto z-10 xl:pr-8 relative xl:pl-36"
                    initial="hidden"
                    whileInView="visible"
                    variants={slideInFromLeft(0.2)}
                    viewport={{ once: true }}
                >
                    <H2 klasse="  z-20 text-center">
                        <div className="">Abonnieren Sie</div>
                        <div>unseren Newsletter</div>
                    </H2>
                    <P klasse="mb-6 lg:w-2/4 text-center">
                        Im Atelier Buchner bieten wir Ihnen ein umfangreiches Kursprogramm, das sich an alle
                        Kunstinteressierten richtet – unabhängig von Ihrem Erfahrungslevel. Jährlich veranstalten wir
                        unsere vier großen Akademien, die speziell darauf ausgelegt sind, Ihre künstlerischen
                        Fähigkeiten zu fördern und weiterzuentwickeln.
                    </P>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-b placeholder-darkGrey mt-8 font-bold border-darkGrey text-center bg-transparent font-body w-full lg:w-2/4 text-darkGrey text-xl p-2 mb-4 focus:outline-none"
                    />
                    {error && <P klasse="text-red-500 mb-4">{error}</P>}
                    <MainButtonNOLink klasse="mt-8" icon={ArrowButton}>
                        Abonnieren
                    </MainButtonNOLink>
                </motion.div>
                <div className="col-span-12 lg:col-span-12 pt-4  flex  justify-center text-center"></div>
                <div
                    ref={parallaxRef7}
                    className="bg-[#CFCCC2] absolute top-[12svh] left-[20svw] w-[40svw] h-[20svh] 3xl:w-[10.83svw] 3xl:h-[15svh] 3xl:left-[45%] 3xl:top-[22svh]"
                ></div>
            </SectionContainer>
        </>
    );
};

export default Newsletter;

// data-scroll data-scroll-speed="3"
