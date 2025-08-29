import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
  server: {
    historyApiFallback: {
      rewrites: [
        { from: /^\/learn\/.*/, to: '/index.html' },
        { from: /^\/api\/.*/, to: '/index.html' },
      ],
    },
  },
})