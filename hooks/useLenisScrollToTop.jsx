// hooks/useLenisScrollToTop.js
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useLenis } from "../libs/lenis"; // Adjust the path according to your project structure

const useLenisScrollToTop = () => {
    const router = useRouter();
    const lenisRef = useRef(null);
    const lenis = useLenis(({ scroll }) => {
        // called every scroll
    });

    useEffect(() => {
        lenisRef.current = lenis;

        const handleRouteChange = () => {
            if (lenisRef.current) {
                lenisRef.current.scrollTo(0, { immediate: true });
            }
        };

        router.events.on("routeChangeComplete", handleRouteChange);

        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router, lenis]);

    return lenisRef;
};

export default useLenisScrollToTop;
