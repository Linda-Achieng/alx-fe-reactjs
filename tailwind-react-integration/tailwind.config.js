// tailwind.config.js
import { defineConfig } from 'tailwindcss';

export default defineConfig({
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Replace 'purge'
  theme: {
    extend: {}, // Use 'extend' to add custom styles
  },
  darkMode: 'media', // Can be 'media' or 'class' (or false to disable dark mode)
  plugins: [], // Add any plugins you need
});
