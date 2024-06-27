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
        "160": "40rem",
        "boardContentHeight":"300px"
      },
    },
  },
  plugins: [],
};
