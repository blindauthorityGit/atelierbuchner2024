import React from "react";

import ArrowButtonBlack from "../../assets/icons/arrowBtnBlack.svg";

const GeneralNavButton = ({ direction, onClick }) => {
    return (
        <div className="bg-primaryColor-100 rounded-xl p-2" onClick={onClick}>
            <img className={direction === "left" ? "rotate-180" : null} src={ArrowButtonBlack.src} alt="" />
        </div>
    );
};

export default GeneralNavButton;
