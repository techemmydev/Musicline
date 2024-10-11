/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["20px", "29.26px"],
      "3xl": ["25px", "50px"],
      "4xl": ["48px", "58px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      fontFamily: {
        PlusJakartaSans: ["Plus Jakarta Sans", "sans-serif"],
        serif: ["Merriweather", "serif"],
        OpenSans: ["Open Sans", "sans-serif"],
      },
      colors: {
        primary: "#ECEEFF",
        "coral-red": "#ABB8C4",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
        "icon-color": "#B38B37", // Example of a custom yellow
      },
      boxShadow: {
        "custom-1": "0px 8px 12px 0px #FFFFFF0A inset", // First box-shadow
        "custom-2": "0px 24px 64px -16px #0000003D", // Second box-shadow
        "custom-3": "16px 24px 64px -24px #FFFFFF0A inset", // Third box-shadow
        "checkbox-1": "0px 1px 3px 0px #0000000D", // Corrected key
        "checkbox-2": "0px 1px 2px -1px #0000000D", // Corrected key
        "success-shadow": "0px 4px 26px -4px #4AC97E29", // Corrected key
        "box1-shadow": "0px 10px 45px -3px #4AC97E4D", // Corrected key
      },
      backgroundImage: {
        "hero ": "url('/assets/img/Logo-Musicine-1.png')",
        " card": "url(/img/Logo-Musicine-1.png')",
      },
      backgroundImage: {
        "background-checkbox":
          "linear-gradient(45deg, #4D62E5 0%, #87DDEE 45.31%, #B6F09C 100%)",
        boxdash:
          "linear-gradient(117.58deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0) 100%)",
      },
      backgroundColor: {
        "custom-blue": "#131619",
      },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [],
};
