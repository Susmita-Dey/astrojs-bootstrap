import type { AstroIntegration } from "astro";

export default function bootstrapIntegration(): AstroIntegration {
  return {
    name: "@astrojs/bootstrap",
    hooks: {
      "astro:config:setup": ({ injectScript }) => {
        // Inject the Bootstrap CSS import
        injectScript(
          "page-ssr",
          `import 'bootstrap/dist/css/bootstrap.min.css';`
        );

        // Inject the Bootstrap JavaScript bundle import
        // injectScript('page-ssr', `import 'bootstrap/dist/js/bootstrap.bundle.min.js';`);
      },
    },
  };
}
