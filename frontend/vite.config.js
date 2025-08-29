import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          icons: ['lucide-react', '@heroicons/react']
        }
      }
    }
  },
  // Enable static generation for specific routes
  ssr: {
    noExternal: ['react-router-dom']
  }
})