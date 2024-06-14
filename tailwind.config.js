/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./sections/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                "3xl": "1920px", // Add new breakpoint
            },
            container: {
                center: true,
                padding: "0rem",
                screens: {
                    sm: "100%",
                    md: "728px",
                    lg: "984px",
                    xl: "1240px",
                    "2xl": "1496px",
                    "3xl": "1680px", // Custom size for the new breakpoint
                },
            },
            fontFamily: {
                ...fontFamily,
                headline: ["the-seasons", "serif"],
                body: ["articulat-cf", "sans-serif"],
            },
            colors: {
                primaryColor: {
                    DEFAULT: "#c3c0ae",
                    50: "#f7f7f5",
                    100: "#edece7",
                    200: "#dad8ce",
                    300: "#c3c0ae",
                    400: "#aaa48d",
                    500: "#999076",
                    600: "#8c826a",
                    700: "#756b59",
                    800: "#60584c",
                    900: "#4f493f",
                    950: "#2a2520",
                },
                neutralColor: {
                    DEFAULT: "#494949",
                    50: "#f6f6f6",
                    100: "#e7e7e7",
                    200: "#d1d1d1",
                    300: "#b0b0b0",
                    400: "#888888",
                    500: "#6d6d6d",
                    600: "#5d5d5d",
                    700: "#4f4f4f",
                    800: "#494949",
                    900: "#3d3d3d",
                    950: "#262626",
                },
                darkGrey: {
                    DEFAULT: "#393836",
                },
            },
        },
    },
    plugins: [],
};
