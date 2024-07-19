import React, { useState, useRef, useEffect } from "react";

//COMPS
import SectionContainer from "../../components/layout/sectionContainer";
import { Benefit } from "../../components/benefit";
import { CoverImage } from "../../components/images";
import { IconText } from "../../components/icons";

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

const Booking = ({ data }) => {
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

    return (
        <>
            <SectionContainer klasse="gap-8 !bg-primaryColor-100 pb-36 px-36 py-36" fullHeight>
                <div className="col-span-6">
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
                    <div className="infos xl:mt-16">
                        <IconText icon={Phone.src} isLink link="tel:+436509444150" text="+43 650 944 4150"></IconText>
                        <IconText
                            icon={Email.src}
                            isLink
                            link="mailto:christine@atelierbucher.at"
                            text="christine@atelierbuchner.at"
                        ></IconText>
                    </div>
                </div>
                <div className="col-span-6 relative">
                    <CoverImage
                        src={Galerie.src}
                        mobileSrc={Galerie.src}
                        alt="Cover Background"
                        klasse={""}
                        // style={{ }}
                        className=" !aspect-[9/16] mix-blend-darken lg:!aspect-[1/1]"
                    />
                </div>
            </SectionContainer>
        </>
    );
};

export default Booking;
