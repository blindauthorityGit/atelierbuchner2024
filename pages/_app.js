import "/styles/globals.css";
import { useState, useRef, useEffect } from "react";
import useStore from "../store/store"; // Import the Zustand store
import { Menu } from "../components/menu";
import MenuConfig from "../config/menu";
import AnimatedCursor from "react-animated-cursor";
import { ModalMenu } from "../components/modal";
import { MenuModal } from "../components/modalContent";
import TransitionLayout from "../animations/transitionLayout/";
import Footer from "../sections/footer";

import { gsap } from "gsap";

//LIBS
import { ReactLenis, useLenis } from "../libs/lenis";

//HOOKS
import useScrollToTop from "../hooks/useScrollToTop"; // Adjust the path according to your project structure
import useLenisScrollToTop from "../hooks/useLenisScrollToTop"; // Adjust the path according to your project structure
import { usePathname } from "next/navigation";

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

    const [isModalOpen, setIsModalOpen] = useState(false);
    useScrollToTop();
    const pathname = usePathname();

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

    useEffect(() => {
        console.log(pathname);
        if (lenisRef.current) {
            console.log("TOP ");
            // lenis.current?.scrollTo(0, { immediate: true });
        }
    }, [pathname, lenis]);

    return (
        <>
            {" "}
            {isModalOpen && (
                <ModalMenu
                    onClose={() => {
                        setIsModalOpen(false);
                    }}
                    isOpen={true}
                >
                    <MenuModal></MenuModal>
                </ModalMenu>
            )}
            <Menu
                logo={MenuConfig.logo}
                logoWhite={MenuConfig.logoWhite}
                links={MenuConfig.links}
                ctas={MenuConfig.ctas}
                burgerMenu={MenuConfig.burgerMenu}
                burgerClick={() => {
                    console.log("clicked", isModalOpen);
                    setIsModalOpen(true);
                }}
            />{" "}
            <TransitionLayout>
                <ReactLenis ref={lenisRef} autoRaf={false} root options={{ lerp: 0.12 }}>
                    {/* <AnimatedCursor innerScale={1} outerScale={1.7} /> */}

                    <Component {...pageProps} />
                    <Footer></Footer>
                </ReactLenis>
            </TransitionLayout>
        </>
    );
}
