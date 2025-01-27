module.exports = {
    mode: "jit",
    content: [
        "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", 
        "./src/**/*.{js,ts,jsx,tsx,html,mdx}"
    ],
    darkMode: "class",
    theme: {
        screens: {
            md: { max: "1050px" }, 
            sm: { max: "550px" }
        },
        extend: {
            colors: {
                black: {
                    "900_0c": "var(--black_900_0c)"
                },
                blue: {
                    600: "var(--blue_600)",
                    800: "var(--blue_800)",
                    "800_01": "var(--blue_800_01)"
                },
                blue_gray: {
                    100: "var(--blue_gray_100)",
                    800: "var(--blue_gray_800)"
                },
                gray: {
                    50: "var(--gray_50)",
                    100: "var(--gray_100)",
                    200: "var(--gray_200)",
                    300: "var(--gray_300)",
                    600: "var(--gray_600)",
                    900: "var(--gray_900)",
                    "100_01": "var(--gray_100_01)",
                    "900_01": "var(--gray_900_01)",
                    "900_02": "var(--gray_900_02)",
                    "900_28": "var(--gray_900_28)"
                },
                indigo: {
                    50: "var(--indigo_50)",
                    a100: "var(--indigo_a100)",
                    a100_3f: "var(--indigo_a100_3f)"
                },
                light_blue: {
                    100: "var(--light_blue_100)"
                },
                white: {
                    a700: "var(--white_a700)",
                    a700_00: "var(--white_a700_00)",
                    a700_1e: "var(--white_a700_1e)"
                }
            },
            boxShadow: {
                xs: "0 1px 2px 0 #0a0c120c",
                sm: "0 0 24px 0 #08173528"
            },
            fontFamily: {
                inter: ["Inter", "sans-serif"],
                satoshi: ["Satoshi", "sans-serif"]
            }
        }
    },
    plugins: [require("@tailwindcss/forms")]
};
