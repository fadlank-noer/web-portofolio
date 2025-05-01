// @ts-check
import { defineConfig } from 'astro/config';

// Plugins
import tailwindcss from "@tailwindcss/vite";

// Integrations
import alpinejs from "@astrojs/alpinejs";
import preact from "@astrojs/preact";
import react from "@astrojs/react";
import solidJs from "@astrojs/solid-js";
import svelte from "@astrojs/svelte";
import vue from "@astrojs/vue";

export default defineConfig({
  vite: {
        plugins: [tailwindcss()],
    },

  integrations: [
    alpinejs(), 
    svelte(), 
    vue(),
    preact({
      include: ['**/preact/*'],
    }),
    react({
      include: ['**/react/*'],
    }),
    solidJs({
      devtools: true,
      include: ['**/solid/*'],
    })
  ],
});
