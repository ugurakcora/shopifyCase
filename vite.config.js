import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'assets',
    emptyOutDir: false,
    minify: false,
    rollupOptions: {
      input: 'tailwind.css',
      output: {
        dir: 'assets',
        assetFileNames: 'style.css',
      },
    },
  },
});
