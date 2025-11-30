import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        personal: resolve(__dirname, 'src/personal.html'),
        proyect: resolve(__dirname, 'src/proyect.html'),
        contact: resolve(__dirname, 'src/contact.html'),
        notFound: resolve(__dirname, 'src/404.html'),
      },
    },
  },
});
