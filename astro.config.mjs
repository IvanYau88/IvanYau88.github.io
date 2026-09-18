import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ivanyau88.github.io',
  vite: { plugins: [tailwindcss()] },
});
