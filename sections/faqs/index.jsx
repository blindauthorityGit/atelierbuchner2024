import React, { useState, useRef, useEffect } from "react";

//COMPS
import SectionContainer from "../../components/layout/sectionContainer";
import { CoverImage } from "../../components/images";
import { FAQs } from "../../components/faqs";
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
import IntroImg from "../../assets/test/introImg.jpg";

//HOOKS
import useDimension from "../../hooks/useDimension";

//FUNCTIONS
// import urlFor from "../../functions/urlFor";

// ANIMATION
import ParallaxElement from "../../animations/parallax/parallaxElement";

const FAQSection = ({ klasse }) => {
    const parallaxRef5 = useRef(null);

    const faqData = [
        {
            question: "What is your return policy?",
            answer: "Our return policy allows returns within 30 days of purchase. The product must be in its original condition and packaging. Please keep the receipt for reference.",
        },
        {
            question: "How long does shipping take?",
            answer: "Shipping typically takes 5-7 business days within the country. International shipping may take up to 15 business days, depending on the destination.",
        },
        {
            question: "Do you offer customer support?",
            answer: "Yes, we offer 24/7 customer support via email, phone, and live chat. Our team is ready to assist you with any questions or concerns.",
        },
        {
            question: "Can I track my order?",
            answer: "Yes, once your order is shipped, you will receive a tracking number via email. You can use this number to track your order on our website or the carrier's site.",
        },
        {
            question: "Are there any discounts available?",
            answer: "We frequently offer discounts and promotions. Please subscribe to our newsletter or follow us on social media to stay updated on the latest deals.",
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept a variety of payment methods including credit/debit cards, PayPal, and bank transfers. All transactions are securely processed.",
        },
    ];

    useEffect(() => {
        // Ensure initial transform is set to neutral
        gsap.set(parallaxRef5.current, { y: 0 });

        const setupParallax = () => {
            gsap.fromTo(
                parallaxRef5.current,
                { y: 0 },
                {
                    y: "-70%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: parallaxRef5.current,
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

    return (
        <>
            <SectionContainer klasse={`gap-4 xl:gap-12 relative ${klasse}  px-4 py-12 lg:pb-36 lg:pt-12`}>
                <div className="hidden lg:block lg:col-span-1"></div>
                <motion.div
                    className="col-span-12 lg:col-span-7 pt-16 h-auto z-10 xl:pr-8 relative xl:pl-36"
                    initial="hidden"
                    whileInView="visible"
                    variants={slideInFromLeft(0.2)}
                    viewport={{ once: true }}
                >
                    <H2 klasse="lg:ml-[-8rem] lg:absolute z-20 top-24 left-8">
                        <div className="">Häufig gestellte Fragen</div>
                    </H2>
                </motion.div>
                <div className="col-span-12 lg:col-span-12 lg:mt-20 pt-4 flex flex-col justify-center">
                    <FAQs data={faqData}></FAQs>
                </div>
                <div
                    ref={parallaxRef5}
                    className="bg-primaryColor-100 absolute top-[12svh] left-[20svw] w-[40svw] h-[25svh] 3xl:w-[10.83svw] 3xl:h-[15svh] 3xl:left-[0] 3xl:top-[8svh]"
                ></div>
            </SectionContainer>
        </>
    );
};

export default FAQSection;

// data-scroll data-scroll-speed="3"
