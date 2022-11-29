/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "540px",
        // => @media (min-width: 576px) { ... }

        sm: "640px",
        // => @media (min-width: 576px) { ... }

        md: "768px",
        // => @media (min-width: 960px) { ... }

        lmd: "856px",
        // => @media (min-width: 576px) { ... }

        lg: "1024px",
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  plugins: [],
};
