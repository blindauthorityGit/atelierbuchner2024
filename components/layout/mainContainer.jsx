// components/layout/MainContainer.js
import React from "react";

const MainContainer = React.forwardRef(({ children, width, id, klasse, ...props }, ref) => {
    return (
        <main
            ref={ref}
            id={id}
            className={`m-auto container lg:container 3xl:max-h-full ${klasse} ${width}`}
            {...props}
        >
            {children}
        </main>
    );
});

export default MainContainer;
