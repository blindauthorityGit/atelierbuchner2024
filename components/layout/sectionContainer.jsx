import React, { forwardRef } from "react";

const SectionContainer = forwardRef(({ children, klasse, fullHeight, ...props }, ref) => {
    return (
        <section
            ref={ref}
            className={`grid grid-cols-12 relative bg-primaryColor-50 ${klasse} ${fullHeight ? "min-h-[100svh]" : ""}`}
            {...props}
        >
            {children}
        </section>
    );
});

export default SectionContainer;
