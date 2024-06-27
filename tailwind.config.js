/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#5A6675",
        yellowBg: "#FDCA09",
        pinkBg: "#FEF1E0",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      screens: {
        xs: "480px",
        mds: "600px",
        md: "800px",
        lgss: "976px",
        lg: "1000px",
        xxl: "1300px",
      },
    },
  },
  variants: {},
  plugins: [],
};
