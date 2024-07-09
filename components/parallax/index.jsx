"use client";
import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { useWindowSize } from "@studio-freight/hamo";

const Parallax = ({ className, children, speed = 1, id = "parallax" }) => {
    const trigger = useRef(null);
    const target = useRef(null);
    const timeline = useRef(null);

    const { width: windowWidth } = useWindowSize();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const y = windowWidth * speed * 0.1;

        const setY = gsap.quickSetter(target.current, "y", "px");

        timeline.current = gsap.timeline({
            scrollTrigger: {
                id: id,
                trigger: trigger.current,
                scrub: true,
                start: "top bottom",
                end: "bottom top",
                onUpdate: (e) => {
                    setY(e.progress * y);
                    console.log(e.progress);
                },
            },
        });
        return () => {
            timeline?.current.kill();
        };
    }, [id, speed, windowWidth]);

    return (
        <div ref={trigger} className={className}>
            <div ref={target}>{children}</div>
        </div>
    );
};

export default Parallax;
