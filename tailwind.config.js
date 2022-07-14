/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#96f2ab",

          secondary: "#ed80d7",

          accent: "#adfdff",

          neutral: "#252B3C",

          "base-100": "#FCFCFD",

          info: "#ADDAE6",

          success: "#60D7C5",

          warning: "#FAA638",

          error: "#EA717F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
