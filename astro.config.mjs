import { defineConfig } from 'astro/config';
import compress from 'astro-compress';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [compress(), react()]
});