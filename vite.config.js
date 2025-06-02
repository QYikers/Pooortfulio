import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    assetsInlineLimit: 0, // This ensures videos are not inlined
  },
  publicDir: 'public', // This ensures the public directory is copied as-is
})
