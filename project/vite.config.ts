import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/English-With-SHipon/', // Replace with your repository name
  plugins: [react()],
  root: './', // Ensure index.html is in the root directory
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Alias for src
    },
  },
  server: {
    port: 5173, // Specify a fixed port for consistency
  },
  build: {
    outDir: 'dist', // Output directory
  },
});