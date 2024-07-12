"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useWindowSize } from "@studio-freight/hamo";

const Parallax = ({ className, children, speed = 1, id = "parallax", style }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [contentLoaded, setContentLoaded] = useState(false); // New state for content loaded
    const trigger = useRef(null);
    const target = useRef(null);
    const timeline = useRef(null);
    const { width: windowWidth } = useWindowSize();

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const y = windowWidth * speed * 0.1;

        gsap.set(target.current, { y: 0 });
        timeline.current = gsap.timeline({
            scrollTrigger: {
                id: id,
                trigger: trigger.current,
                scrub: true,
                start: "top bottom",
                end: "bottom top",
                onUpdate: (e) => {
                    const newY = e.progress * y;
                    gsap.set(target.current, { y: newY });
                },
                onRefresh: () => setIsLoaded(true),
            },
        });

        ScrollTrigger.refresh();

        return () => {
            timeline?.current.kill();
        };
    }, [id, speed, windowWidth]);

    useEffect(() => {
        // Simulate content loading with a timeout or replace with actual content load check
        const timer = setTimeout(() => {
            setContentLoaded(true); // Assume content has loaded
        }, 400); // Adjust time as needed

        return () => clearTimeout(timer);
    }, []);

    // Combine isLoaded and contentLoaded to determine visibility
    const isVisible = isLoaded && contentLoaded;

    // Adjust combined style to include visibility check
    const combinedStyle = { ...style, opacity: isVisible ? 1 : 0, transition: "opacity 0.5s ease-in-out" };

    return (
        <div ref={trigger} className={className} style={combinedStyle}>
            <div ref={target}>{children}</div>
        </div>
    );
};

export default Parallax;
