import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import proxyOptions from './proxyOptions'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    port: 8080,
    proxy: proxyOptions,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})