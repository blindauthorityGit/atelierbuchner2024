import React from "react";
import { P } from "../typography";

const ListElement = ({ leftText, rightText }) => {
    return (
        <div className="flex font-body space-x-2 mb-2">
            <div className="w-1/4 bg-primaryColor-100 flex items-center px-3 lg:p-6 font-semibold xl:text-xl">
                {leftText}
            </div>
            <div className="w-3/4 bg-white flex items-center p-6 ">
                <P klasse="!font-regular">{rightText}</P>
            </div>
        </div>
    );
};

export default ListElement;
