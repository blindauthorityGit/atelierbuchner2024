// animationVariants.js
export const fadeIn = (delay = 0) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut", delay },
    },
});

export const slideInFromLeft = (delay = 0) => ({
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut", delay },
    },
    exit: { opacity: 0, x: 100, transition: { duration: 0.6, ease: "easeOut" } },
});

export const slideInFromRight = (delay = 0) => ({
    hidden: { opacity: 0, x: 100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut", delay },
    },
});

export const slideInFromBottom = (delay = 0) => ({
    hidden: { opacity: 0, y: 100 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut", delay },
    },
});
