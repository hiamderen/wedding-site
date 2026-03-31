import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages deploys to https://<owner>.github.io/<repo>/
  base: '/wedding-site/',
})
