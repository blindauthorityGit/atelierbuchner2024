import { useEffect, useState } from "react";

const useDimension = () => {
    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const updateDimension = () => {
            setDimension({
                width: window.innerWidth,
                height: window.innerHeight,
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
