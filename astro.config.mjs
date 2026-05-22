// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  base: '/tolland_titan/',
  site: 'https://agsid.github.io/tolland_titan/',
  output: 'static',
  trailingSlash: "always"

});