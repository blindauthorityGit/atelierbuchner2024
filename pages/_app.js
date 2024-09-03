import "/styles/globals.css";
import { useState, useRef, useEffect } from "react";
import { Menu } from "../components/menu";
import MenuConfig from "../config/menu";
import AnimatedCursor from "react-animated-cursor";
import { ModalMenu, Modal, Overlay } from "../components/modal";
import { MenuModal } from "../components/modalContent";
import TransitionLayout from "../animations/transitionLayout/";
import Footer from "../sections/footer";

import { gsap } from "gsap";
import { AnimatePresence } from "framer-motion";

//LIBS
import { ReactLenis, useLenis } from "../libs/lenis";

//HOOKS
import useScrollToTop from "../hooks/useScrollToTop"; // Adjust the path according to your project structure
import useLenisScrollToTop from "../hooks/useLenisScrollToTop"; // Adjust the path according to your project structure
import { usePathname } from "next/navigation";

//STORE
import useStore from "../store/store";

export default function App({ Component, pageProps }) {
    const isModalOpen = useStore((state) => state.isModalOpen);
    const setIsModalOpen = useStore((state) => state.setIsModalOpen);
    const modalContent = useStore((state) => state.modalContent);

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
            <AnimatePresence>
                {isModalOpen && (
                    <>
                        <Modal
                            onClose={() => {
                                setIsModalOpen(false);
                            }}
                            isOpen={true}
                        >
                            {modalContent}
                        </Modal>
                        <Overlay
                            onClose={() => {
                                setIsModalOpen(false);
                            }}
                        ></Overlay>
                    </>
                )}
            </AnimatePresence>
            {/* {isModalOpen && (
                <ModalMenu
                    onClose={() => {
                        setIsModalOpen(false);
                    }}
                    isOpen={true}
                >
                    <MenuModal></MenuModal>
                </ModalMenu>
            )} */}
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
