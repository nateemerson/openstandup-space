/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "main-text-gradient":
          "linear-gradient(180deg, #BA188C 0%, rgba(115, 20, 159, 0.2) 100%)",
        "rules-bkg-color": "rgba(186, 24, 140, 0.27)",
        "purple-bkg-color": "rgba(63, 5, 90, 0.96)",
        "pink-color": "#BA188C",
      },
      fontFamily: { sans: '"Inter", sans-serif' },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
