import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html'
      },
      output: {
        entryFileNames: 'assets/[name]-[hash]-v4.js',
        chunkFileNames: 'assets/[name]-[hash]-v4.js',
        assetFileNames: 'assets/[name]-[hash]-v4.[ext]',
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom']
        }
      }
    },
    copyPublicDir: true
  },
  publicDir: 'public',
  server: {
    port: 3000,
    host: true
  }
})