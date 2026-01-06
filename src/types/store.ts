// Vuex store types

import { User, UserState } from './user';
import { AsyncState } from './common';

/**
 * Root state interface
 */
export interface RootState {
  user: UserState;
  // Add other module states here
}

/**
 * Vuex action context
 */
export interface ActionContext<S, R = RootState> {
  state: S;
  rootState: R;
  rootGetters: any;
  commit: (type: string, payload?: any) => void;
  dispatch: (type: string, payload?: any) => Promise<any>;
  getters: any;
}

/**
 * Vuex mutation handler
 */
export type MutationHandler<S> = (state: S, payload?: any) => void;

/**
 * Vuex action handler
 */
export type ActionHandler<S, R = RootState> = (
  context: ActionContext<S, R>,
  payload?: any
) => Promise<any> | any;

/**
 * Vuex getter handler
 */
export type GetterHandler<S, R = RootState> = (
  state: S,
  getters: any,
  rootState: R,
  rootGetters: any
) => any;

/**
 * Vuex module configuration
 */
export interface VuexModule<S = any, R = RootState> {
  namespaced?: boolean;
  state: S | (() => S);
  mutations?: Record<string, MutationHandler<S>>;
  actions?: Record<string, ActionHandler<S, R>>;
  getters?: Record<string, GetterHandler<S, R>>;
  modules?: Record<string, VuexModule>;
}

/**
 * Store collection interface
 */
export interface StoreCollection<T = any> {
  items: T[];
  total: number;
  loading: boolean;
  error: string | null;
}

