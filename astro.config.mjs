import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // User site (IvanYau88.github.io): served from the domain root, so base is '/'.
  site: 'https://ivanyau88.github.io',
  base: '/',
  vite: { plugins: [tailwindcss()] },
});
