import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@bookings': path.resolve(__dirname, './src/features/bookings'),
      '@payments': path.resolve(__dirname, './src/features/payments'),
      '@transversal': path.resolve(__dirname, './src/features/transversal'),
      '@tripps': path.resolve(__dirname, './src/features/tripps'),
      '@users': path.resolve(__dirname, './src/features/users'),
    },
  },
  
})
