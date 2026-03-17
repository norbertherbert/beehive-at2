import { defineConfig } from 'vite';

export default defineConfig({
  base: '/beehive-at2/',
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
});
