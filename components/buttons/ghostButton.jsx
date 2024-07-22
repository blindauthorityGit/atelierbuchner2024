import React from "react";
import Link from "next/link";

const GhostButton = (props) => {
    return (
        <Link href={props.link} className={props.centered ? "mx-auto left-0 right-0 relative" : null}>
            <button
                className={`max-w-[24rem] ${
                    props.klasse
                } border border-darkGrey text-darkGrey lg:min-w-[16rem] font-semibold font-regular 2xl:text-base tracking-widest hover-underline-animation z-20 flex items-center justify-center py-4 text-xs sm:text-base xl:text-sm 3xl:text-[1rem] sm:py-6 xl:py-4 2xl:py-[0.875rem] w-full px-6 uppercase rounded-[5px] ${
                    props.noMargin ? null : "mt-4 lg:mt-12 md:mt-16"
                }`}
            >
                <span className=""> {props.children}</span>
            </button>
        </Link>
    );
};
export default GhostButton;
