// Vue Router types

import { RouteConfig, Route } from 'vue-router';

/**
 * Extended route configuration with meta
 */
export interface RouteMeta {
  title?: string;
  requiresAuth?: boolean;
  roles?: string[];
  permissions?: string[];
  layout?: string;
  breadcrumb?: BreadcrumbItem[];
}

/**
 * Extended route config for Vue Router 3 (Vue 2)
 * Combines RouteConfig with additional meta property
 */
export interface ExtendedRouteConfig {
  path: string;
  name?: string;
  component?: any;
  components?: Record<string, any>;
  redirect?: string | Route | ((to: Route) => string | Route);
  props?: boolean | Record<string, any> | ((route: Route) => Record<string, any>);
  alias?: string | string[];
  children?: ExtendedRouteConfig[];
  beforeEnter?: (to: Route, from: Route, next: (to?: string | Route | false | ((vm: any) => any) | void) => void) => void;
  meta?: RouteMeta;
  caseSensitive?: boolean;
  pathToRegexpOptions?: any;
}

/**
 * Breadcrumb item
 */
export interface BreadcrumbItem {
  text: string;
  to?: string | Route;
  disabled?: boolean;
}

/**
 * Route query parameters
 */
export interface RouteQuery {
  [key: string]: string | (string | null)[] | null | undefined;
}

/**
 * Route params
 */
export interface RouteParams {
  [key: string]: string;
}

/**
 * Navigation guard context
 */
export interface NavigationGuardContext {
  to: Route;
  from: Route;
  next: (to?: string | Route | false | ((vm: any) => any) | void) => void;
}

