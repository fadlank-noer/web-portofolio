// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import alpinejs from "@astrojs/alpinejs";

import preact from "@astrojs/preact";

import react from "@astrojs/react";

import solidJs from "@astrojs/solid-js";

import svelte from "@astrojs/svelte";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  vite: {
        plugins: [tailwindcss()],
    },

  integrations: [alpinejs(), preact(), react(), solidJs(), svelte(), vue()],
});