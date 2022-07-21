/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,svelte}"],
  daisyui: {
    themes: [
      {
        netsuite: {
          "primary": "#2869fc",
          "secondary": "#ededed",
          "accent": "#5f7999",
          "neutral": "#dfe5ed",
          "base-100": "#FFFFFF",
          "info": "#0000FF",
          "success": "#008000",
          "warning": "#db9b56",
          "error": "#FF0000",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,js,ts,svelte}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("@tailwindcss/typography"), require("daisyui")],
// }
