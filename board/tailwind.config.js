/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "3rem",
      },
      maxHeight: {
        '120': "30rem",
      },
    },
  },
  plugins: [],
};
