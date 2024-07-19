import React from "react";

const IconText = ({ icon, text, isLink, link, isIntern }) => {
    return (
        <div className="flex font-body space-x-6 items-center">
            <div className="left">
                <img className="w-12" src={icon} alt="" />
            </div>
            <div className="right xl:text-2xl font-semibold text-darkGrey">
                {isLink ? <a href={link}>{text}</a> : { text }}
            </div>
        </div>
    );
};

export default IconText;
