/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx}", // Add other file types if needed
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom_blur': '20rem 10rem 20rem rgba(0, 0, 0, 0.2)', // Example of a shadow with custom blur
      },
    },
  },
  plugins: [],
}
