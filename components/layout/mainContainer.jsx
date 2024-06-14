// components/layout/MainContainer.js
import React from "react";

const MainContainer = React.forwardRef(({ children, width, ...props }, ref) => {
    return (
        <main ref={ref} className={`m-auto container ${width}`} data-scroll-container {...props}>
            {children}
        </main>
    );
});

export default MainContainer;
