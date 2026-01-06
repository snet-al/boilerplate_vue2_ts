# Getting Started with Vue 2 TypeScript Boilerplate

This project is a Vue 2 boilerplate with TypeScript support, built using Vite and the Vue 2 compatibility plugin (`@vitejs/plugin-vue2`).

## Vue 2 + Vite

This boilerplate uses `@vitejs/plugin-vue2` to enable Vue 2 support in Vite. While Vite is primarily designed for Vue 3, this plugin provides full compatibility for Vue 2 projects, allowing you to benefit from Vite's fast development server and optimized build process.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.  
Open <http://localhost:5173> to view it in the browser.

The page will reload if you make edits.  
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.  
It correctly bundles Vue in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!

See the section about deployment for more information.

### `npm run preview`

Preview the production build locally.  
Opens <http://localhost:4173> to view the production build.

### `npm run type-check`

Runs TypeScript type checking without emitting files.

### `npm run lint`

Runs ESLint to check and fix code style issues.

## Default framework Vuetify

We have included in the boilerplate Vuetify as the default UI framework, but this is a choice which can be changed. You can replace it with any other Vue UI library that suits your needs.

## Architecture of the app

To help in the organization of the code we have chosen some of the best practices and tried to implement them in some examples.

* Structure of the code is based on HTML5 principles which state that components should be semantic. So we have organized the components in three levels:
  * **pages**: Entry point components for different apps/pages (multi-page application setup). Each page has an `index.ts` that bootstraps a Vue instance and mounts the page component. Page components are simple wrappers with `<router-view />` that serve as the root for each app.
  * **components**: Presentational, reusable components that are web-component-like. They don't have to know about the data in the app, they should only get the data through props.
  * **views**: Route-level components that are mapped to child routes in the router. These components are rendered inside layouts and contain the actual page content. They may handle data fetching, state management, and business logic, communicating with store collections/models, services, etc.

### Folder Structure

```
src/
├── components/     # Presentational, reusable components (prop-driven)
├── pages/          # Entry point components for multi-page apps (bootstraps Vue instances)
├── views/          # Route-level components with data and business logic
├── layouts/        # Layout components that wrap views
├── services/       # Service classes for API calls and business logic
├── store/          # Store collections and models for state management
├── clients/        # API client configurations (e.g., Axios setup)
├── router/         # Vue Router configuration files
├── types/          # TypeScript type definitions
├── plugins/        # Vue plugins and extensions (e.g., Vuetify, EventBus)
├── mixins/         # Reusable Vue mixins
└── styles/         # Global styles, SCSS variables, and theme configurations
```

### Additional folders:

* **pages**: Contains entry point components for multi-page applications. Each page bootstraps a Vue instance and serves as the root component for a separate HTML page (e.g., `index.html`, `docs.html`).
* **layouts**: Contains layout components that wrap views and provide consistent structure (navigation, headers, footers).
* **services**: Contains service classes for API calls and business logic.
* **store**: Contains store collections and models for state management and data handling.
* **types**: Contains TypeScript type definitions for better type safety.
* **clients**: Contains API client configurations (e.g., Axios setup).
* **plugins**: Contains Vue plugins and extensions (e.g., Vuetify, EventBus).
* **mixins**: Contains reusable Vue mixins.
* **router**: Contains Vue Router configuration files.
* **styles**: Contains global styles, SCSS variables, and theme configurations.

## Rules when editing folders

### `src/pages`

- **Entry point only**: pages are simple root components that bootstrap Vue instances for multi-page applications.
- **Minimal logic**: page components should only contain `<router-view />` and minimal setup (plugins, global styles).
- **Bootstrap in index.ts**: each page folder should have an `index.ts` that creates and mounts the Vue instance.
- **One page per HTML**: each page corresponds to a separate HTML entry point (e.g., `index.html`, `docs.html`).

### `src/views`

- **Route-level components**: views are components mapped to child routes in the router configuration.
- **Rendered in layouts**: views are rendered as children of layout components via nested `<router-view />`.
- **Content and logic**: views contain the actual page content and may handle data fetching, state management, and business logic.
- **Use services and store**: when needed, communicate with the app through services, store collections/models, etc.

### `src/layouts`

- **Parent route components**: layouts are used as parent route components in the router configuration.
- **Use router-view**: layouts contain `<router-view />` to render child route components (views).
- **Structure and navigation**: layouts provide consistent app structure (navigation drawers, headers, footers, sidebars).
- **No business logic**: layouts should only handle structure and visual layout, not data fetching or state management.
- **Keep reusable**: avoid hardcoding route-specific assumptions or page-only state.

### `src/services`

- **Single responsibility**: each service should handle one domain or resource (e.g., `UserService`, `ProductService`).
- **Use API client**: always use the configured API client from `src/clients` instead of direct HTTP calls.
- **Return typed data**: all service methods should return properly typed responses.
- **Error handling**: implement consistent error handling across all service methods.
- **Request cancellation**: support aborting requests when components are destroyed (e.g., using AbortController with Axios).

### `src/store`

- **Custom store pattern**: This project does not rely on Vuex. Instead, it uses a custom store pattern based on typed models and collections.
- **Modular structure**: organize store into collections and models for better maintainability.
- **Collections pattern**: use collections to manage arrays of models with loading states and pagination.
- **Models pattern**: use models to represent domain entities with their business logic and API interactions.
- **Typed data**: define TypeScript interfaces for all models and collection states.
- **Singleton pattern**: consider using singleton pattern for store instances when needed (see examples in collections).

### `src/types`

- **Organized by domain**: group related types together (e.g., `user.ts`, `api.ts`, `form.ts`).
- **Export from index**: expose shared types from `src/types/index.ts` for consistent imports.
- **Use interfaces**: prefer interfaces over types for object shapes to allow declaration merging.
- **Document complex types**: add JSDoc comments for complex type definitions.

### `src/clients`

- **Centralized configuration**: keep all API client setup and configuration in this folder.
- **Factory function**: export a factory function that creates configured axios instances.
- **Default options**: set default base URL, headers, and authentication in the factory.
- **Type-safe**: ensure the client returns properly typed responses.
- **Reusable**: the factory allows creating multiple client instances with different configurations when needed.

### `src/plugins`

- **Proper registration**: plugins should properly extend Vue's prototype or provide global functionality.
- **Type declarations**: add TypeScript declarations for any global properties or methods added.
- **Initialization logic**: keep plugin initialization and setup code here, not in main entry files.
- **Documentation**: document any global functionality provided by the plugin.

### `src/mixins`

- **Reusable logic**: mixins should contain logic that can be shared across multiple components.
- **Avoid conflicts**: use clear naming conventions to avoid property name conflicts.
- **Typed options**: define TypeScript interfaces for mixin options and return types.
- **Object-based mixins**: export mixins as objects with methods that can be mixed into components.
- ⚠️ **Use sparingly**: prefer services or helper functions when possible, as mixins can make type inference and debugging harder in TypeScript.

### `src/router`

- **Route organization**: group related routes together and use separate router files for different sections.
- **Typed routes**: use TypeScript for route configuration and meta fields (see `src/types/route.ts`).
- **Layout components**: use layouts as parent route components with child routes for nested views.
- **Route guards**: implement navigation guards in router files, not in components.

### `src/styles`

- **SCSS variables**: use variables from `variables.scss` for consistent theming.
- **Global styles**: only place truly global styles here; component-specific styles belong with components.
- **BEM naming**: consider using BEM or similar naming conventions for class names.
- **Theme consistency**: follow the established theme structure when adding new styles.

## Environment Variables

Environment variables are defined using `.env` files and exposed via Vite. Create a `.env` file in the root directory with your configuration.

Example:

```env
VITE_BASE_URL=https://api.example.com
VITE_SECTOR_ID=your-sector-id
VITE_MODELS=true
```

> **Note**: Vite uses the `VITE_` prefix for environment variables. Access them via `import.meta.env.VITE_*` in your code.

## Browser Support

This boilerplate targets modern browsers. The build includes legacy browser support via `@vitejs/plugin-legacy`, which provides polyfills and transpilation for older browsers including IE11.

If you need to adjust browser support, modify the `targets` configuration in `vite.config.ts`.

## Recommended IDE Setup

For Vue 2 projects, you can use either **Vetur** or **Volar** (in Vue 2 / legacy mode). If using Volar, disable Vetur to avoid conflicts.

**Recommended**: [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Project Setup

```sh
npm install
```

For quick reference to available commands, see the [Available Scripts](#available-scripts) section above.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).
