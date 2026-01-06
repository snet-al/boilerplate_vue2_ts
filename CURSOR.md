# Getting Started with Vue 2 TypeScript Boilerplate

This project is a Vue 2 boilerplate with TypeScript support, built using Vite and the Vue 2 compatibility plugin (`@vitejs/plugin-vue2`).

## Vue 2 + Vite

This boilerplate uses `@vitejs/plugin-vue2` to enable Vue 2 support in Vite. While Vite is primarily designed for Vue 3, this plugin provides full compatibility for Vue 2 projects, allowing you to benefit from Vite's fast development server and optimized build process.

This is a **Single Page Application (SPA)** with client-side routing.

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

* Structure of the code is based on HTML5 principles which state that components should be semantic. So we have organized the components in two levels:
  * **components**: Presentational, reusable components that are web-component-like. They don't have to know about the data in the app, they should only get the data through props. Files should use **CamelCase** naming convention (e.g., `MyButton.vue`, `UserCard.vue`).
  * **views**: Route-level components that simulate pages (similar to React pages). These components are rendered inside layouts and contain the actual page content. They may handle data fetching, state management, and business logic, communicating with store collections/models, services, etc.

### Folder Structure

```
src/
├── main.ts         # Application entry point
├── App.vue         # Root component
├── components/     # Presentational, reusable components (prop-driven, CamelCase naming)
├── views/          # Route-level components that simulate pages (like React pages)
├── layouts/        # Layout components that wrap views
├── services/       # Service classes for API calls and business logic
├── store/          # Store collections and models for state management
├── libs/           # Shared libraries and utilities
│   └── http/       # HTTP client configurations (e.g., Axios setup)
├── router/         # Vue Router configuration files
├── types/          # TypeScript type definitions
├── plugins/        # Vue plugins and extensions (e.g., Vuetify, EventBus)
├── mixins/         # Reusable Vue mixins
└── styles/         # Global styles, SCSS variables, and theme configurations
```

### Entry files:

* **main.ts**: Application entry point that bootstraps Vue with router, Vuetify, and global styles.
* **App.vue**: Root component that renders `<router-view />` for client-side routing.

### Additional folders:

* **layouts**: Contains layout components that wrap views and provide consistent structure (navigation, headers, footers).
* **services**: Contains service classes for API calls and business logic.
* **store**: Contains store collections and models for state management and data handling.
* **types**: Contains TypeScript type definitions for better type safety.
* **libs/http**: Contains HTTP client configurations (e.g., Axios setup).
* **plugins**: Contains Vue plugins and extensions (e.g., Vuetify, EventBus).
* **mixins**: Contains reusable Vue mixins.
* **router**: Contains Vue Router configuration files.
* **styles**: Contains global styles, SCSS variables, and theme configurations.

## Rules when editing folders

### `src/components`

- **Presentational only**: components should be purely presentational and receive data through props.
- **CamelCase naming**: all component files must use CamelCase naming convention (e.g., `MyButton.vue`, `UserCard.vue`).
- **Reusable**: design components to be reusable across the application.
- **No business logic**: avoid data fetching or state management; delegate to parent views.
- **Props-driven**: use props for data input and emit events for output.

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
- **Use HTTP client**: always use the configured HTTP client from `src/libs/http` instead of direct HTTP calls.
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

### `src/libs/http`

- **Centralized configuration**: keep all HTTP client setup and configuration in this folder.
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

## Project Setup

```sh
npm install
```

For quick reference to available commands, see the [Available Scripts](#available-scripts) section above.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).
