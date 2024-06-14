const SectionContainer = ({ children, klasse, fullHeight, ...props }) => {
    return (
        <section className={`grid grid-cols-12 relative ${klasse} ${fullHeight ? "min-h-[100svh]" : null}`} {...props}>
            {children}
        </section>
    );
};

export default SectionContainer;
