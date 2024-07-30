import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Ensure that the base starts with a slash and is relative
  build: {
    rollupOptions: {
      input: {
        main: './index.html'
      }
    },
    outDir: 'dist',
    assetsDir: 'assets'
  }
});
