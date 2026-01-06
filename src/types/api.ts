// API request/response types

import { ApiResponse, PaginatedResponse, ApiError } from './common';

/**
 * HTTP methods
 */
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

/**
 * API request configuration
 */
export interface ApiRequestConfig {
  url: string;
  method?: HttpMethod;
  data?: any;
  params?: Record<string, any>;
  headers?: Record<string, string>;
  timeout?: number;
  withoutAuthorization?: boolean;
}

/**
 * Custom axios request interceptor config
 */
export interface CustomAxiosConfig {
  baseURL?: string;
  headers?: Record<string, string>;
  timeout?: number;
  params?: Record<string, any>;
}

/**
 * API client options
 */
export interface ApiClientOptions {
  baseURL?: string;
  timeout?: number;
  headers?: Record<string, string>;
  withoutAuthorization?: boolean;
}

/**
 * Generic API response type
 */
export type ApiResponseType<T = any> = ApiResponse<T>;

/**
 * Paginated API response type
 */
export type PaginatedApiResponseType<T = any> = PaginatedResponse<T>;

/**
 * API error response type
 */
export type ApiErrorType = ApiError;

