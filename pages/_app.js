import "@/styles/globals.css";
import { useRef, useEffect } from "react";
import { useLocomotiveScroll } from "../hooks/useLocomotiveScroll";
import useStore from "../store/store"; // Import the Zustand store
import { Menu } from "../components/menu";
import MenuConfig from "../config/menu";

export default function App({ Component, pageProps }) {
    const containerRef = useRef(null);
    const { scrollY } = useLocomotiveScroll(containerRef);
    const setScrollY = useStore((state) => state.setScrollY);

    useEffect(() => {
        console.log("Scroll container ref:", containerRef.current);
        scrollY.onChange((value) => {
            setScrollY(value);
        });
    }, [containerRef, scrollY, setScrollY]);

    return (
        <>
            <Menu
                logo={MenuConfig.logo}
                links={MenuConfig.links}
                ctas={MenuConfig.ctas}
                burgerMenu={MenuConfig.burgerMenu}
            />
            <div ref={containerRef} data-scroll-container>
                <Component {...pageProps} />
            </div>
        </>
    );
}
