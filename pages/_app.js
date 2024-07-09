import "/styles/globals.css";
import { useRef, useEffect } from "react";
import useStore from "../store/store"; // Import the Zustand store
import { Menu } from "../components/menu";
import MenuConfig from "../config/menu";
import AnimatedCursor from "react-animated-cursor";

import { gsap } from "gsap";

//LIBS
import { ReactLenis, useLenis } from "../libs/lenis";

export default function App({ Component, pageProps }) {
    // const containerRef = useRef(null);
    // const { scrollY } = useLocomotiveScroll(containerRef);
    // const setScrollY = useStore((state) => state.setScrollY);

    // useEffect(() => {
    //     console.log("Scroll container ref:", containerRef.current);
    //     scrollY.onChange((value) => {
    //         setScrollY(value);
    //     });
    // }, [containerRef, scrollY, setScrollY]);

    const lenis = useLenis(({ scroll }) => {
        // called every scroll
    });

    const lenisRef = useRef();

    useEffect(() => {
        function update(time) {
            lenisRef.current?.lenis?.raf(time * 1000);
        }

        gsap.ticker.add(update);

        return () => {
            gsap.ticker.remove(update);
        };
    }, []);

    return (
        <>
            <Menu
                logo={MenuConfig.logo}
                logoWhite={MenuConfig.logoWhite}
                links={MenuConfig.links}
                ctas={MenuConfig.ctas}
                burgerMenu={MenuConfig.burgerMenu}
            />
            <ReactLenis ref={lenisRef} autoRaf={false} root options={{ lerp: 0.85 }}>
                {/* <AnimatedCursor innerScale={1} outerScale={1.7} /> */}

                <Component {...pageProps} lenisRef={lenisRef} />
            </ReactLenis>
        </>
    );
}
