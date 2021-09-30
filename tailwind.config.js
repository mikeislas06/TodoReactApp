module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            white: "#ffffff",
            black: "#000000",
            red: "#ff0000",
            main_blue: "#001e6c",
            second_blue: "#035397",
            third_blue: "#5089c6",
            yellow: "#ffaa4c",
            main_purple: "#8400ff",
            orange: "#DF711B",
            success: "#81B214",
        },
        borderRadius: {
            50: "50px",
        },
        minHeight: {
            0: "0",
            "1/4": "25%",
            "1/2": "50%",
            "3/4": "75%",
            73: "73%",
            full: "100%",
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
