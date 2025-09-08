// @ts-check
import { defineConfig, envField } from 'astro/config';

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
  env: {
    schema: {
      SECRET_RESEND_API_KEY: envField.string({ context: "server", access: "secret" }),
    }
  },
  vite: {
    plugins: [tailwindcss()],
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
