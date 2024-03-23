/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: (() => {
        let spacing = {}
        for (let i = 1; i <= 100; i++) {
          spacing[`${i}vh`] = `${i}vh`
        }
        return spacing
      })(),
    },
  },
  plugins: [],
}