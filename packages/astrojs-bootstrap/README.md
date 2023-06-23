# @astrojs/bootstrap 🥾

This **[Astro integration][astro-integration]** brings the popular [Bootstrap](https://getbootstrap.com/) CSS framework to every `.astro` file and [framework component](https://docs.astro.build/en/core-concepts/framework-components/) in your project, allowing you to easily utilize Bootstrap's pre-styled components and responsive grid system.

- <strong>[Why Bootstrap](#why-bootstrap)</strong>
- <strong>[Installation](#installation)</strong>
- <strong>[Usage](#usage)</strong>
- <strong>[Examples](#examples)</strong>
- <strong>[Troubleshooting](#troubleshooting)</strong>
- <strong>[Contributing](#contributing)</strong>
- <strong>[Changelog](#changelog)</strong>

## Why Bootstrap?

Bootstrap is a widely used CSS framework that provides a set of pre-styled components, layout options, and utilities to help you build responsive and modern web applications. By integrating Bootstrap into your Astro project, you can leverage its extensive CSS classes and components to quickly style your UI and achieve a consistent and professional look.

Bootstrap also offers a JavaScript component library that enhances interactivity and provides additional functionality such as modals, carousels, tooltips, and more. With this integration, you can easily include and utilize Bootstrap's JavaScript components in your Astro project.

## Installation

To install the Bootstrap integration, you can use the `astro add` command-line tool. Open a terminal and run one of the following commands based on your preferred package manager:

```sh
# Using NPM
npx astro add bootstrap
# Using Yarn
yarn astro add bootstrap
# Using PNPM
pnpm astro add bootstrap
```

The installation process will add the necessary packages and configure your Astro project to use Bootstrap.

If you encounter any issues during installation, please report them on [GitHub](https://github.com/withastro/astro/issues) and consider following the manual installation steps described below.

### Manual Install

If the automatic installation doesn't work for you, you can manually install the `@astrojs/bootstrap` and `bootstrap` packages using your package manager. Run the following command in your terminal:

```sh
npm install @astrojs/bootstrap bootstrap
```

Once the packages are installed, you need to configure the integration in your `astro.config.*` file by adding it to the `integrations` property.

__`astro.config.mjs`__

```js ins={2} "bootstrap()"
import { defineConfig } from 'astro/config';
import bootstrap from '@astrojs/bootstrap';

export default defineConfig({
  // ...
  integrations: [bootstrapIntegration()],
});
```

## Usage

Once the Bootstrap integration is installed and configured, you can start using Bootstrap's CSS classes and components in your `.astro` files and framework components.

You can refer to the official [Bootstrap documentation](https://getbootstrap.com/docs) to explore the available CSS classes, components, and JavaScript features.

To use Bootstrap's CSS classes, simply apply the desired classes to your HTML elements. For example:

```astro
<div class="container">
  <h1 class="text-primary">Hello, Bootstrap!</h1>
  <button class="btn btn-primary">Click Me</button>
</div>
```

To use Bootstrap's JavaScript components, you'll need to make sure the Bootstrap JavaScript bundle is included in your project. The integration takes care of loading the Bootstrap JavaScript bundle for you, so you can start using the components right away.

```astro
---
astro: client
---
<script
			src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
			integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
			crossorigin="anonymous"></script>
<script>
  import { onMount } from 'svelte';

  let showModal = false;

  onMount(() => {
    // Example

 of using Bootstrap's JavaScript components
    // You can interact with the modal using JavaScript
    const modal = new bootstrap.Modal(document.getElementById('myModal'));
    modal.show();
  });
</script>

<div class="container">
  <h1>Hello, Bootstrap!</h1>
  <button class="btn btn-primary" on:click={() => (showModal = true)}>Show Modal</button>

  <div class="modal" tabindex="-1" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal Title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>This is the modal content.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</div>
```

Remember to include the necessary CSS and JavaScript imports in your Astro components as shown in the example above.


## Examples

Here are a few examples and resources that demonstrate how to use Bootstrap with Astro:

- [Astro Bootstrap Starter](https://github.com/withastro/astro/tree/latest/examples/with-bootstrap) - A starter project that uses Bootstrap with Astro.
- Astro's homepage uses Bootstrap. You can check out its [Bootstrap configuration file](https://github.com/withastro/astro.build/blob/main/bootstrap.config.cjs) or an [example component](https://github.com/withastro/astro.build/blob/main/src/components/Navbar.astro).
- [Browse Astro Bootstrap projects on GitHub](https://github.com/search?q=%22%40astrojs%2Fbootstrap%22%3A+path%3A%2Fpackage.json&type=code) for more examples!

## Troubleshooting

If you encounter any issues or have questions about using Bootstrap with Astro, here are some troubleshooting tips:

- If you don't see the expected styles or components, make sure you have correctly applied the Bootstrap CSS classes and have

 included the necessary JavaScript imports.

- If you're using the unminified versions of Bootstrap CSS and JavaScript (`useMinified: false`), ensure that you have included the correct file paths and that the files are located in the specified locations.

- If you're experiencing conflicts or unexpected behavior with other CSS or JavaScript frameworks, check for any conflicting CSS class names, JavaScript function names, or conflicting JavaScript behavior. You may need to modify your code or adjust the integration configuration to resolve the conflicts.

- If you're encountering errors or issues specific to the Astro Bootstrap integration, you can report them on the [Astro GitHub repository](https://github.com/withastro/astro/issues).

For additional help and support, you can also join the [Astro Discord community](https://astro.build/chat) and ask questions in the `#support` channel.

## Contributing

The Astro Bootstrap integration is maintained by the Astro Core team. If you would like to contribute to the integration or report any issues, you can do so on the [Astro GitHub repository](https://github.com/withastro/astro).

## Changelog

For a history of changes to the Astro Bootstrap integration, you can refer to the [CHANGELOG.md](https://github.com/withastro/astro/blob/main/packages/integrations/bootstrap/CHANGELOG.md) file in the integration's repository.

That's it! You now have Bootstrap integrated with Astro and can start building stylish and responsive web applications. Happy coding!