// components/layout/MainContainer.js
import React from "react";

const MainContainer = React.forwardRef(({ children, width, id, ...props }, ref) => {
    return (
        <main ref={ref} id={id} className={`m-auto container ${width}`} {...props}>
            {children}
        </main>
    );
});

export default MainContainer;
