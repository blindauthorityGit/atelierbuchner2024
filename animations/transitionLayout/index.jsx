// components/TransitionLayout.js
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const transitionVariants = {
    initial: {
        opacity: 0,
        clipPath: "circle(0% at 50% 50%)",
    },
    animate: {
        opacity: 1,
        clipPath: "circle(150% at 50% 50%)",
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    },
    exit: {
        opacity: 0,
        clipPath: "circle(0% at 50% 50%)",
        transition: {
            duration: 1,
            ease: "easeInOut",
        },
    },
};

const TransitionLayout = ({ children }) => {
    const router = useRouter();
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const handleStart = () => {
            console.log("STARTWED");
            setIsTransitioning(true);
        };
        const handleComplete = () => {
            console.log("FINISHED");

            setIsTransitioning(false);
        };

        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleComplete);
        router.events.on("routeChangeError", handleComplete);

        return () => {
            router.events.off("routeChangeStart", handleStart);
            router.events.off("routeChangeComplete", handleComplete);
            router.events.off("routeChangeError", handleComplete);
        };
    }, [router]);

    return (
        <>
            <AnimatePresence>
                {isTransitioning && (
                    <motion.div
                        key="transition"
                        className="fixed inset-0 bg-white z-50"
                        variants={transitionVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    />
                )}
            </AnimatePresence>
            {children}
        </>
    );
};

export default TransitionLayout;
