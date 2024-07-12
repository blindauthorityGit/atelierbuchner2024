import React from "react";

const GradientDiv = () => {
    return <div className="absolute" style={styles.gradientDiv}></div>;
};

const styles = {
    gradientDiv: {
        width: "100%",
        height: "20svh",
        background: "linear-gradient(to top, #f7f7f5, rgba(247, 247, 245, 0))",
    },
};

export default GradientDiv;
