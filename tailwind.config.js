module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#0d0d0d',
        'theme-red': '#E70657'
      },
      backgroundImage: {
        'teemo-desktop': "url('../images/teemo_desktop.webp')",
        'teemo-mobile': "url('../images/teemo_mobile.webp')",
      }
    }
  },
  plugins: [],
}