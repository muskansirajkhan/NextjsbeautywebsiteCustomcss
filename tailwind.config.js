/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',  // Include 'app' folder
    './src/components/**/*.{js,ts,jsx,tsx}',  // Include 'components' folder
  ],
  theme: {
    extend: {
      colors: {
        'custom-bg': 'rgb(161, 115, 54)', // Adding custom color
      },
    },
  },
  plugins: [],
}




