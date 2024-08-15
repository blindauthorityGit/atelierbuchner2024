// components/layout/MainContainer.js
import React from "react";

const MainContainer = React.forwardRef(({ children, width, id, klasse, ...props }, ref) => {
    return (
        <main ref={ref} id={id} className={`m-auto container ${klasse} ${width}`} {...props}>
            {children}
        </main>
    );
});

export default MainContainer;
