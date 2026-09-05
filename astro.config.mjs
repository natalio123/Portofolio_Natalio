import { defineConfig } from 'astro/config';

// https://astro.build/config
// Situs ini sepenuhnya statis - tidak ada endpoint API atau koneksi database,
// jadi tidak butuh adapter server (@astrojs/node) lagi.
export default defineConfig({
  output: 'static',
});
