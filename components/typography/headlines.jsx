// components/Typography.js
import React from "react";

const H1 = React.forwardRef(({ children, klasse, style }, ref) => {
    return (
        <h1
            ref={ref}
            style={style}
            className={`text-[clamp(32px,calc(42px+0.0957*(100vw-320px)),56px)] uppercase  !leading-[0.95] 3xl:tracking-tight text-balance md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-[6.75rem] 4xl:text-[8.5rem] mb-4 lg:mb-6  font-headline text-darkGrey ${klasse}`}
        >
            {children}
        </h1>
    );
});

const H2 = React.forwardRef(({ children, klasse }, ref) => {
    return (
        <h2
            ref={ref}
            className={`text-3xl font-headline text-textColor md:text-3xl  lg:text-2xl xl:text-3xl 2xl:text-7xl mb-4 lg:mb-10   ${klasse}`}
        >
            {children}
        </h2>
    );
});

const H3 = React.forwardRef(({ children, klasse, style }, ref) => {
    return (
        <h3
            ref={ref}
            className={`text-2xl xl:text-xl 2xl:text-6xl 2xl:mb-8 font-bold font-body font-ueber text-textColor ${klasse}`}
            style={style}
        >
            {children}
        </h3>
    );
});

const H4 = React.forwardRef(({ children, klasse }, ref) => {
    return (
        <h4
            ref={ref}
            className={`text-base md:text-sm lg:text-lg xl:text-sm 2xl:text-2xl font-black font-body mb-6 text-darkGrey ${klasse}`}
        >
            {children}
        </h4>
    );
});

const H5 = React.forwardRef(({ children, klasse }, ref) => {
    return (
        <h5 ref={ref} className={`text-xs lg:text-base xl:text-sm font-regular font-ueber text-textColor ${klasse}`}>
            {children}
        </h5>
    );
});

export { H1, H2, H3, H4, H5 };
