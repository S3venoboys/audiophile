/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Manrope: ["Manrope"],
      },
      backgroundImage: {
        "hero-mobile":
          "url('./src/assets/assets/home/mobile/image-header.jpg')",
        "hero-tablet":
          "url('./src/assets/assets/home/tablet/image-header.jpg')",
        "hero-desktop":
          "url('./src/assets/assets/home/desktop/image-hero.jpg')",
      },
    },
  },
  plugins: [],
};
