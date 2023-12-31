/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        general: ["var(--font-general)"],
        montserrat: ["var(--font-montserrat)"],
        lato: ["var(--font-lato)"],
      },
      backgroundImage: {
        "banner-hero": 'url("/images/bg-hero.jpg")',
        "product-1": 'url("/images/product-1.jpg")',
        "product-2": 'url("/images/product-2.jpg")',
        "product-3": 'url("/images/product-3.jpg")',
        "branding": 'url("/images/branding-3.jpg")',
        "footer": 'url("/images/footer.jpg")',
        "product-card": 'url("/Image-2.jpg")',
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        snow: "#FCFCFC",
        "snow-2": "#F2F2F2",
        "snow-3": "#F4F4F4",
        orange: "#F38D39",
        "orange-2": "#BC5B0B",
        shadow: "#121212",
        wood: "#F5F3EB",
        grey: "#4F4F4F",
        "wood-2": "#EDE8D9",
        furniture: "#311C0B",
        gandalf: "#4F4F4F",
        leaf: "#219653",
        "leaf-2": "#069e45",
      },
    },
  },
  plugins: [require("daisyui")]
};
