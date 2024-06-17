// components/Menu.js
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Menu = ({ logo, links, ctas, burgerMenu, ...props }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="w-full px-4 py-2 bg-white fixed z-40 font-body text-darkGrey" {...props}>
            <div className="container mx-auto flex items-center justify-between">
                {/* Left section */}
                <div className="flex items-center lg:flex-1">
                    <Link href="/" passHref>
                        <div className="flex items-center cursor-pointer">
                            <img src={logo.src} alt={logo.alt} className="w-8 h-8 lg:h-14 lg:w-14 mr-3" />
                        </div>
                    </Link>
                </div>

                {/* Center section */}
                <div className="flex-none hidden lg:flex">
                    <div className="flex justify-center space-x-6">
                        {links.map((link, index) => (
                            <Link href={link.href} key={index} passHref>
                                <div className="text-lg font-medium cursor-pointer">{link.text}</div>
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
                    <button onClick={toggleMenu} className="text-xl ml-4">
                        <img src={burgerMenu.icon} width="32px" alt="Menu" />
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
        </nav>
    );
};

export default Menu;
