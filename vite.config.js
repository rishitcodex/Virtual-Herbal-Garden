import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  server: {
    port: 3000,
    open: true
  }
});
