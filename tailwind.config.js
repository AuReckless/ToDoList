/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/*.{html,js}"],
    theme: {
        extend: {},
        fontFamily: {
          'Ruqaa': ['Aref Ruqaa', 'serif'],
          'cairo': ['Cairo Play', 'sans-serif']
        },
    },
    plugins: [],
    darkMode: "selector",
};

