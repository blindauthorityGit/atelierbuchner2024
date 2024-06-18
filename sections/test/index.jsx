// sections/TestSection.js
import React, { forwardRef } from "react";

const TestSection = forwardRef((props, ref) => {
    return (
        <section data-scroll-section ref={ref}>
            <div data-scroll data-scroll-speed="2">
                <h1>Test Section</h1>
                <p>This section should demonstrate scrolling effects.</p>
            </div>
        </section>
    );
});

export default TestSection;
