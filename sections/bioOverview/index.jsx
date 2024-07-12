// sections/BioOverview.js
import React, { forwardRef, useEffect, useRef, useLayoutEffect } from "react";
import { motion, useTransform, useAnimation, motionValue } from "framer-motion";

// COMPS
import SectionContainer from "../../components/layout/sectionContainer";

//TYPO
import { H1, H2, P } from "../../components/typography";

//STORE
import useStore from "../../store/store"; // Import the Zustand store
//GSAP
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
//ASSETS
import CBOverviewBig from "../../assets/cbOverviewBig.jpg";
//HOOKS
import useDimension from "../../hooks/useDimension";

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

const BioOverview = forwardRef((props, ref) => {
    // const scrollYValue = useStore((state) => state.scrollY);

    const elementRef = useRef(null);
    const elementRef2 = useRef(null);
    const elementRef3 = useRef(null);
    const elementRef4 = useRef(null);
    const elementRef5 = useRef(null);
    const elementRef6 = useRef(null);

    const { height } = useDimension();

    const isDark = useStore((state) => state.isDark);
    const setIsDark = useStore((state) => state.setIsDark);

    useEffect(() => {
        console.log(isDark);
    }, [isDark]);

    useLayoutEffect(() => {
        console.log(height, height * 2);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: elementRef.current,
                start: "top top", // Trigger when the element's top reaches the top of the viewport
                end: () => `+=${height * 2}`,
                // end: () => `+=${height * 2}`,
                scrub: true,
                // markers: true, // Optional: for debugging
                pin: elementRef.current, // Pin this element
                pinSpacing: true,
                onLeave: () => setIsDark(false),
                onLeaveBack: () => setIsDark(false),

                // Ensure spacing is added to prevent overlap
            },
        });

        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: elementRef.current,
                start: "top center", // Trigger when the element's top reaches the top of the viewport
                end: () => `+=${height * 1.75}`,
                // end: () => `+=${height * 2}`,
                scrub: true,
                markers: true, // Optional: for debugging
                onEnter: () => setIsDark(true),
                onEnterBack: () => setIsDark(true),
            },
        });
        const tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: elementRef.current,
                start: "top top", // Trigger when the element's top reaches the top of the viewport
                end: () => `+=${height / 1.3}`,
                // end: () => `+=${height * 2}`,
                scrub: true,
            },
        });

        // tl.to(elementRef2.current, { background: "#393836", duration: 1 });
        tl2.to(elementRef2.current, {
            opacity: 1,
            clipPath: "inset(0% 0%)",
            background: "#393836",
            duration: 128,
            // ease: "power2.inOut",
        })
            .to(elementRef3.current, { opacity: "70%", duration: 15 }, "+=56")
            .to(elementRef3.current, {
                width: "59%",
                height: "80%",
                top: "12.6%",
                duration: 64,
                ease: "power2.inOut",
            })
            .to(elementRef4.current, {
                opacity: "100%",
                transform: "translateX(0%)", // Assuming the starting position is set elsewhere to be off-screen to the right
                duration: 9,
            })
            .to(elementRef5.current, {
                opacity: "100%",
                transform: "translateX(0%)", // Assuming the starting position is set elsewhere to be off-screen to the right
                duration: 6,
            })
            .to(
                elementRef6.current,
                {
                    top: "-12svh", // Assuming the starting position is set elsewhere to be off-screen to the right
                    height: "40.9svh",
                    duration: 138,
                },
                "+=2"
            );
        // tl3.to(elementRef3.current, { opacity: "70%", duration: 1 }).to(elementRef3.current, {
        //     width: "59%",
        //     height: "80%",
        //     top: "12.6%",
        //     duration: 1,
        // });

        // Cleanup function to kill the timeline and scrollTrigger on component unmount
        return () => {
            tl.kill();
            tl2.kill();
            tl3.kill();
            // ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, [height]);

    useEffect(() => {
        const adjustPinSpacerHeight = () => {
            //   const contentHeight = calculateContentHeight(); // Implement this function based on your content
            const pinSpacer = document.querySelectorAll(".pin-spacer");
            console.log(pinSpacer); // Assume your pin spacer has an ID 'pinSpacer'
            pinSpacer.forEach((element) => {
                element.style.height = `${height * 3.2}px`;
            });
            //   if (pinSpacer) {
            //     pinSpacer.style.height = `${contentHeight}px`;
            //   }
        };

        adjustPinSpacerHeight();

        // Optional: Adjust height on window resize
        window.addEventListener("resize", adjustPinSpacerHeight);
        return () => window.removeEventListener("resize", adjustPinSpacerHeight);
    }, [height]); // Depend on height to recalculate when viewport height changes

    return (
        <SectionContainer fullHeight ref={elementRef}>
            <div
                className="w-full h-full col-span-12 bioOverview  bg-[#d9d8ce] animate-me2"
                // style={{ backgroundImage: `url(${Hero2.src})` }}
                ref={elementRef2}
            >
                <div className="container  mx-auto grid grid-cols-12 relative h-full">
                    <div
                        className="absolute opacity-0 w-full h-full top-6 left-0 bg-no-repeat  bg-cover bg-center z-0 mix-blend-lighten"
                        style={{ backgroundImage: `url(${CBOverviewBig.src})` }}
                        ref={elementRef3}
                    ></div>
                    <div className="col-span-6 h-full"></div>
                    <div className="col-span-6 before z-10 h-full relative flex flex-col justify-center lg:w-[80%]">
                        {" "}
                        <div className="text text-black animate-me z-10 opacity-0 translate-x-[-45%]" ref={elementRef4}>
                            <H2 klasse="text-4xl uppercase !text-primaryColor-50">King-of-Saxony Bird-of-Paradise</H2>
                        </div>
                        <div className="text z-10 opacity-0 translate-x-[15%]" ref={elementRef5}>
                            <P klasse="!text-primaryColor-200">
                                Lorem ipsum dolor sit amet consectetur. Risus eget eleifend porttitor quis mattis
                                tellus. Sed ultrices cras lectus rhoncus. Dui convallis neque nulla tortor pellentesque
                                quis scelerisque. Elementum vitae eget pharetra dui adipiscing auctor. Sit nulla
                                tristique natoque convallis venenatis. Sed elit donec tellus vitae mattis odio sed.
                                Bibendum varius nullam facilisis iaculis interdum. Felis pharetra elit dolor porta. Sit
                                ultrices cursus laoreet enim imperdiet vitae vitae duis ullamcorper.
                            </P>
                        </div>
                    </div>
                </div>
                <div
                    // ref={parallaxRef}
                    ref={elementRef6}
                    className="bg-[#313131] absolute w-full 3xl:w-[23.64svw] h-[25svh] 3xl:h-[10.9svh] 3xl:left-[60svw] top-[25svh] 3xl:top-[70svh]"
                ></div>
            </div>
        </SectionContainer>
    );
});

export default BioOverview;
