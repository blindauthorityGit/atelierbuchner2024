// components/Menu.js
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

//STORE
import useStore from "../../store/store"; // Import the Zustand store

const Menu = ({ logo, logoWhite, links, ctas, burgerMenu, burgerClick, ...props }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const isDark = useStore((state) => state.isDark);
    const setIsDark = useStore((state) => state.setIsDark); // Assume this action exists

    useEffect(() => {
        const targetElement = document.getElementById("dark-mode-trigger");

        if (targetElement) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (!entry.isIntersecting) {
                        console.log("EGUGE");
                        setIsDark(true); // Switch to dark mode when the div is in view
                    } else {
                        console.log("EGUGE");

                        setIsDark(false); // Switch to light mode when the div is out of view
                    }
                },
                { threshold: 0.5 } // Adjust the threshold as needed
            );

            observer.observe(targetElement);

            return () => {
                observer.unobserve(targetElement); // Cleanup observer on component unmount
            };
        }
    }, [setIsDark]);

    // Animation variants for light and dark modes
    const variants = {
        light: {
            backgroundColor: "transparent", // Light mode background color
            color: "#000000", // Light mode text color
            transition: { duration: 0.5 },
        },
        dark: {
            backgroundColor: "#393836", // Dark mode background color
            color: "#f7f7f5", // Dark mode text color
            transition: { duration: 0.5 },
        },
    };

    return (
        <motion.nav
            className="w-full px-4 py-2 fixed z-40 font-body"
            {...props}
            initial={isDark ? "dark" : "light"} // Initial animation state
            animate={isDark ? "dark" : "light"} // Animate based on isDark state
            variants={variants} // Animation variants
        >
            {" "}
            <div className="container mx-auto flex items-center justify-between">
                {/* Left section */}
                <div className="flex items-center lg:flex-1">
                    <Link href="/" passHref>
                        <div className="flex items-center cursor-pointer">
                            <img
                                src={isDark ? logoWhite.src : logo.src}
                                alt={logo.alt}
                                className="w-8 h-8 lg:h-14 lg:w-14 mr-3"
                            />
                        </div>
                    </Link>
                </div>

                {/* Center section */}
                <div className="flex-none hidden lg:flex">
                    <div className="flex justify-center space-x-6">
                        {links.map((link, index) => (
                            <Link href={link.href} key={index} passHref>
                                <div className=" font-thin tracking-wider cursor-pointer">{link.text}</div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Right section */}
                <div className="flex items-center justify-end flex-1">
                    {ctas.map((cta, index) => (
                        <motion.button
                            key={index}
                            onClick={cta.onClick}
                            className="text-darkGrey border border-darkGrey px-8 py-1 rounded-full"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                        >
                            {cta.text}
                        </motion.button>
                    ))}
                    <button onClick={burgerClick} className="text-xl ml-4">
                        <img src={burgerMenu.icon} width="38px" alt="Menu" />
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden mt-4 space-y-2">
                    {links.map((link, index) => (
                        <Link href={link.href} key={index} passHref>
                            <div className="block text-lg font-medium cursor-pointer">{link.text}</div>
                        </Link>
                    ))}
                    {ctas.map((cta, index) => (
                        <motion.button
                            key={index}
                            onClick={cta.onClick}
                            className="block w-full bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            {cta.text}
                        </motion.button>
                    ))}
                </div>
            )}
        </motion.nav>
    );
};

export default Menu;
