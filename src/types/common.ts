// common utility types

/**
 * Generic API response wrapper
 */
export interface ApiResponse<T = any> {
  data: T;
  message?: string;
  status: number;
  success: boolean;
}

/**
 * Pagination metadata
 */
export interface PaginationMeta {
  currentPage: number;
  perPage: number;
  total: number;
  totalPages: number;
}

/**
 * Paginated API response
 */
export interface PaginatedResponse<T = any> extends ApiResponse<T[]> {
  meta: PaginationMeta;
}

/**
 * Generic error response
 */
export interface ApiError {
  message: string;
  code?: string | number;
  errors?: Record<string, string[]>;
  status?: number;
}

/**
 * Loading state
 */
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

/**
 * Generic state wrapper
 */
export interface AsyncState<T = any> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

/**
 * Optional fields utility type
 */
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

/**
 * Required fields utility type
 */
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

/**
 * Nullable type
 */
export type Nullable<T> = T | null;

/**
 * Dictionary/Record type
 */
export type Dictionary<T> = Record<string, T>;

