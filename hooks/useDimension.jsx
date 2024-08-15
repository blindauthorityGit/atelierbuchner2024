import { useEffect, useState } from "react";

const useDimension = () => {
    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const updateDimension = () => {
            setDimension({
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight,
            });
        };

        window.addEventListener("resize", updateDimension);
        updateDimension();

        return () => {
            window.removeEventListener("resize", updateDimension);
        };
    }, []);

    return dimension;
};

export default useDimension;
