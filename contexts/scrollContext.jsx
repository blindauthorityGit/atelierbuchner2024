// contexts/ScrollContext.js
import React, { createContext, useContext, useState } from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
    const [positions, setPositions] = useState({});

    const registerPosition = (id, start, end) => {
        setPositions((prev) => ({
            ...prev,
            [id]: { start, end },
        }));
    };

    return <ScrollContext.Provider value={{ positions, registerPosition }}>{children}</ScrollContext.Provider>;
};

export const useScrollPositions = () => useContext(ScrollContext);
