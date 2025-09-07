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
    esbuild: {
      jsxFactory: 'h',
      jsxFragment: 'Fragment',
      jsx: 'automatic',
    },
    resolve: {
      alias: {
        'react': 'preact/compat',
        'react-dom': 'preact/compat',
      },
    },
  },

  integrations: [
    alpinejs(),
    svelte(),
    vue(),
    preact({
      compat: true,
      include: ['**/preact/**'],
    }),
    react({
      include: ['**/react/**'],
    }),
    solidJs({
      include: ['**/solid/**'],
    })
  ],
});
