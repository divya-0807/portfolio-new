module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      zIndex: {
        '-50': '-50',
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
  ],
};