import React, { useState, useRef, useEffect } from "react";

//COMPS
import SectionContainer from "../../components/layout/sectionContainer";
import { Benefit } from "../../components/benefit";
import { CoverImage } from "../../components/images";
import { IconText } from "../../components/icons";
import { MultiStepForm } from "../../components/booking";

// ANIMATION
import { motion, useInView } from "framer-motion";
import Parallax from "../../components/parallax";
import { fadeIn, slideInFromLeft, slideInFromRight, slideInFromBottom } from "../../animations/variants";

//RTYPO
import { H1, H3, H4, P } from "../../components/typography";
//ASSETS
import Galerie from "../../assets/test/galerie.jpg";
import Email from "../../assets/icons/email.svg";
import Phone from "../../assets/icons/phone.svg";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const MainBooking = ({ data, options, param }) => {
    const parallaxRef2 = useRef(null);

    useEffect(() => {
        // Ensure initial transform is set to neutral
        gsap.set(parallaxRef2.current, { y: 0 });

        const setupParallax = () => {
            gsap.fromTo(
                parallaxRef2.current,
                { y: 0 },
                {
                    y: "-50%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: parallaxRef2.current,
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

    useEffect(() => {
        console.log("BUBUBUDB");
        console.log(parallaxRef2.current);
    }, []);

    return (
        <>
            {" "}
            <div className="col-span-12 block min-h-[100svh] xl:hidden xl:col-span-6 relative bg-primaryColor-100 xl:rounded-xl">
                <MultiStepForm param={param} options={options}></MultiStepForm>
            </div>{" "}
            <SectionContainer klasse="xl:gap-8 px-4 pt-8 pb-8 lg:pt-20 xl:pb-36 xl:px-36 xl:py-36" fullHeight>
                <div className="col-span-12 xl:col-span-6 relative z-10 xl:pr-16">
                    <H3>Anmeldung</H3>
                    <H4>Sichern Sie sich Ihren Platz!</H4>
                    <P>
                        Lorem ipsum dolor sit amet consectetur. Risus eget eleifend porttitor quis mattis tellus. Sed
                        ultrices cras lectus rhoncus. Dui convallis neque nulla tortor pellentesque quis scelerisque.
                        Elementum vitae eget pharetra dui adipiscing auctor. Sit nulla tristique natoque convallis
                        venenatis. Sed elit donec tellus vitae mattis odio sed. Bibendum varius nullam facilisis iaculis
                        interdum. Felis pharetra elit dolor porta. Sit ultrices cursus laoreet enim imperdiet vitae
                        vitae duis ullamcorper.{" "}
                    </P>
                    <div className="infos my-10 xl:my-0 xl:mt-12">
                        <IconText icon={Phone.src} isLink link="tel:+436509444150" text="+43 650 944 4150"></IconText>
                        <IconText
                            icon={Email.src}
                            isLink
                            link="mailto:christine@atelierbucher.at"
                            text="christine@atelierbuchner.at"
                        ></IconText>
                    </div>{" "}
                    <div className="relative mt-8 rounded-xl hidden">
                        <CoverImage
                            src={Galerie.src}
                            mobileSrc={Galerie.src}
                            alt="Cover Background"
                            klasse={"rounded-xl"}
                            // style={{ }}
                            className="!aspect-[16/9] mix-blend-darken grayscale rounded-xl lg:!aspect-[16/9]"
                        />
                    </div>
                </div>
                <div className="col-span-12 hidden xl:block xl:col-span-6 relative bg-primaryColor-100 xl:rounded-xl">
                    <MultiStepForm param={param} options={options}></MultiStepForm>
                </div>
                <div
                    ref={parallaxRef2}
                    className="bg-primaryColor-100 absolute 3xl:w-[12.6svw] 3xl:h-[20svh] 3xl:left-[0.9svw] 3xl:top-[16svh]"
                ></div>
            </SectionContainer>
        </>
    );
};

export default MainBooking;
