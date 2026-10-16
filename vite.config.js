import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // './' keeps asset paths relative, so the built dist/ works whether it's
  // served from the domain root or a subdirectory.
  base: './',
  plugins: [react(), tailwindcss()],
})
