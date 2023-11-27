import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://gorgeous-cupcake-5d1f0e.netlify.app/",
  integrations: [preact()]
});