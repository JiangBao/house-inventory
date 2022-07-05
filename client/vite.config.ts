import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        // target: 'http://localhost:4001',
        target: 'http://house.u9c8d.com',
        changeOrigin: true,
      }
    },
  },
})
