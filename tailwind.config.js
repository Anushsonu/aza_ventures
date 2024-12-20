/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        scrollRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        "scroll-left": "scrollLeft 20s linear infinite",
        "scroll-right": "scrollRight 20s linear infinite",
        float: "float 1.5s ease-in-out infinite",
      },
      fontFamily: {
        sans: ["Roboto", "Open Sans", "sans-serif"], // Use your imported fonts
      },
    },
  },
  plugins: [],
};
