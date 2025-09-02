// astro.config.mjs
import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind'; // Import the official integration



import vercel from '@astrojs/vercel';



// https://astro.build/config
export default defineConfig({
  // Add the integration here
  integrations: [solidJs(), tailwind()],

  adapter: vercel(),
});