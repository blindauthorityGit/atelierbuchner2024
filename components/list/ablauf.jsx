import React from "react";
import { H3, H4, H5, P } from "../typography";

import ListElement from "./element";

const Ablauf = ({ data }) => {
    return (
        <div>
            <H3 klasse="mb-4">Ablauf</H3>
            {data.map((e, i) => {
                return <ListElement leftText={e.leftText} rightText={e.rightText}></ListElement>;
            })}
        </div>
    );
};

export default Ablauf;
