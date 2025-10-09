import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set the base path for GitHub Pages deployment
  base: "/avikumart.github.io/" // Use the repository name for correct asset loading on GitHub Pages
})
