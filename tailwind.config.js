// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "calm-green": {
                    50: "#f2f8e2",
                    100: "#e4f2c6",
                    200: "#c8e597",
                    300: "#acd769",
                    400: "#91ca3a",
                    500: "#7fb53d",
                    600: "#65912c",
                    700: "#4d6d1e",
                    800: "#344a11",
                    900: "#1b2605",
                },
                "soft-yellow": {
                    50: "#f9fdfa",
                    100: "#f3faee",
                    200: "#e1f5d4",
                    300: "#cfefba",
                    400: "#bdea9f",
                    500: "#deeed9",
                    600: "#a5c8ab",
                    700: "#6b9e77",
                    800: "#3a7344",
                    900: "#1a4720",
                },
                "light-cream": {
                    50: "#f7fff9",
                    100: "#effff3",
                    200: "#dbffe5",
                    300: "#c7ffd7",
                    400: "#b3ffca",
                    500: "#f3fffb",
                    600: "#92ffdd",
                    700: "#70ffcc",
                    800: "#4df9b7",
                    900: "#27e3a0",
                },
            },
            fontFamily: {
                natural: ['"Lora"', "serif"], // Using Lora as the custom font
                poppins: ['"Poppins"', "sans-serif"]

            },
        },
    },
    plugins: [],
};
