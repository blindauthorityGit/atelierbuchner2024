// components/Typography.js
import React from "react";

const P = ({ children, klasse, style, htmlContent, isHtml = false }) => {
    const createMarkup = (htmlString) => {
        return { __html: htmlString };
    };

    return (
        <p
            style={style}
            className={`text-sm text-darkGrey sm:text-base md:text-lg font-body font-[500]  xl:leading-relaxed lg:text-base xl:text-sm 2xl:text-base 3xl:text-[1.25rem]  ${klasse}`}
        >
            {isHtml ? <span dangerouslySetInnerHTML={createMarkup(htmlContent)} /> : htmlContent}
            {children}
        </p>
    );
};

// Add more headline components for H3, H4, etc.

export { P };
