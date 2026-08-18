// @ts-check
import { defineConfig } from "astro/config";

// Building on GitHub Actions (for the GitHub Pages preview) serves the site
// from a /blog-astro/ subpath instead of the eventual production domain.
const isGithubPagesBuild = process.env.GITHUB_ACTIONS === "true";
const basePath = isGithubPagesBuild ? "/blog-astro" : "";

// https://astro.build/config
export default defineConfig({
  site: isGithubPagesBuild
    ? "https://developervlad777.github.io"
    : "https://hashhedge.com",
  base: basePath || "/",
  redirects: {
    // `redirects` destinations are used verbatim (not base-prefixed like
    // regular page links), so the base has to be included by hand here.
    "/blog": `${basePath}/blog/en`,
    // The project has no real homepage yet (that lives outside this repo
    // on hashhedge.com) — only add a root redirect for the Pages preview,
    // so the bare preview URL doesn't 404.
    ...(isGithubPagesBuild ? { "/": `${basePath}/blog/en` } : {}),
  },
});
