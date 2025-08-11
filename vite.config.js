import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path';
// https://vite.dev/config/
export default defineConfig({
  plugins: [ tailwindcss(),
    react()],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  theme: {
    extend: {
      fontFamily: {
        vast: ['"Vast Shadow"', 'serif'],
      },
    },
  },
  
})
