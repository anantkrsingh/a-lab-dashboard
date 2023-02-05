/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {colors: {
      "custom-gray": "#f0f0f0",
      "custom-text-gray": "#888",
      "custom-text-blue": "#233484",
      "custom-text-light": "#344B80",
      "custom-light": "#F5F9FF",
      "custom-blue-light": "#7EE0F3",
      "custom-blue-dark": "#64A3FB",
      headblue: "#1d1b84",
    },},
  },
  plugins: [],
}
