import { FaBars } from "react-icons/fa";
import Logo from "../assets/logo/SVG/logo.svg";
import Burger from "../assets/icons/burger.svg";

const menuConfig = {
    logo: {
        src: Logo.src,
        alt: "Logo",
        text: "MySite",
    },
    links: [
        { href: "/about", text: "About" },
        { href: "/services", text: "Services" },
        { href: "/contact", text: "Contact" },
    ],
    ctas: [{ text: "Login", onClick: () => alert("Login Clicked") }],
    burgerMenu: {
        icon: Burger.src,
    },
};

export default menuConfig;
