/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,svelte}"],
  daisyui: {
    themes: [
      {
        netsuite: {
          "primary": "#2869fc",
          "secondary": "#dbdbdb",
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
      "cupcake","light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"
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
