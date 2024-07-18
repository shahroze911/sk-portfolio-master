/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
      screens: {
        sm:"640px",
        md:"768px",
        lg:"960px",
        xl:"1200px",
      },
      fontFamily:{
        primary:"var(--font-jetbrainsMono)",
      },
  
    extend: {
      backgroundImage:{
        explosion: 'url("/assets/bg-explosion.png")',
        circles: 'url("/assets/bg-circles.png")',
        circleStar: 'url("/assets/circle-star.svg")',
        site: 'url("/assets/site-bg.svg")',
        
      },
      colors:{
        primary:'#03002e',
        //'#1c1c22',#2e2257,#161B40
        accent:{
          DEFAULT:'#AF143c',
          // 00ff99',#00ff99
          hover:'#FFFFFF'
          // 00e187',00e187
        }
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}