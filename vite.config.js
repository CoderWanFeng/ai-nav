import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ai-nav/',
  build: {
    // SPA fallback - 所有路由都指向index.html
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})
