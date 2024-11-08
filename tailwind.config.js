/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
   
    extend: {
      clipPath: {
        custom: 'ellipse(100% 50% at 50% 100%)',
      },
      
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "poppins": "Poppins",
        "Montserrat":"Montserrat",
        robotoSlab: ['Roboto Slab', 'serif'],
        "Quicksand": "Quicksand",
        "Laila": "Laila"
      },
      boxShadow: {
        'bottom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
};
