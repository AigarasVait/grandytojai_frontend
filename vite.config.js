import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { API_BASE_ENDPOINT, API_LOCAL_URL } from './src/constants/api'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server : {
    proxy: {
      '/api': {
        target: API_LOCAL_URL,
        changeOrigin: true
      }
    }
  }
})
