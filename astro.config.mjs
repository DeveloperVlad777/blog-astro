// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://hashhedge.com",
  redirects: {
    "/blog": "/blog/en",
  },
});
