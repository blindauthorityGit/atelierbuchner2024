// pages/index.js

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Lenis from "@studio-freight/lenis";

const SnapTest = ({ lenisRef }) => {
    useEffect(() => {
        const lenis = lenisRef.current?.lenis;

        if (!lenis) {
            console.error("Lenis instance not found");
            return;
        }

        function update() {
            lenis.raf();
        }

        gsap.ticker.add(update);

        lenis.on("scroll", ScrollTrigger.update);

        const sections = document.querySelectorAll(".section");

        sections.forEach((section) => {
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                end: "bottom bottom",
                pin: true,
                snap: {
                    snapTo: (value) => Math.round(value * (sections.length - 1)) / (sections.length - 1),
                    duration: { min: 0.5, max: 1 },
                    ease: "power1.inOut",
                },
                markers: true,
            });
        });

        return () => {
            gsap.ticker.remove(update);
        };
    }, [lenisRef]);

    return (
        <div>
            <section className="section" style={{ height: "100vh", background: "#ff0000" }}>
                Section 1
            </section>
            <section className="section" style={{ height: "100vh", background: "#00ff00" }}>
                Section 2
            </section>
            <section className="section" style={{ height: "100vh", background: "#0000ff" }}>
                Section 3
            </section>
        </div>
    );
};

export default SnapTest;
