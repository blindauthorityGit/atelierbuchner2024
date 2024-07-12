// hooks/useFadeOutOnScroll.js
import { useState, useEffect } from "react";
import { useLenis } from "../libs/lenis";

const useFadeOutOnScroll = (ref) => {
    const [opacity, setOpacity] = useState(1);
    const lenis = useLenis();

    useEffect(() => {
        const handleScroll = (e) => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                const scrollTop = e.scroll;
                const offsetTop = rect.top + scrollTop;
                const windowHeight = window.innerHeight;

                if (scrollTop > offsetTop - windowHeight && scrollTop < offsetTop) {
                    const fadePoint = windowHeight / 1.3;
                    const opacityValue = 1 - (scrollTop - (offsetTop - windowHeight)) / fadePoint + 0.65;
                    setOpacity(opacityValue);
                } else if (scrollTop >= offsetTop) {
                    setOpacity(0);
                } else {
                    setOpacity(1);
                }
            }
        };

        if (lenis) {
            lenis.on("scroll", handleScroll);
        }

        return () => {
            if (lenis) {
                lenis.off("scroll", handleScroll);
            }
        };
    }, [ref, lenis]);

    return opacity;
};

export default useFadeOutOnScroll;
