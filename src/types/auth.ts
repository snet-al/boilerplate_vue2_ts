// authentication types

import { User } from './user';
import { ApiResponse } from './common';

/**
 * Login credentials
 */
export interface LoginCredentials {
  email: string;
  password: string;
}

/**
 * Authentication response
 */
export interface AuthResponse {
  token: string;
  user: User;
}

/**
 * Register credentials
 */
export interface RegisterCredentials {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  name?: string;
}

/**
 * Password reset request
 */
export interface PasswordResetRequest {
  email: string;
}

/**
 * Password reset confirmation
 */
export interface PasswordResetConfirm {
  token: string;
  password: string;
  passwordConfirmation: string;
}

/**
 * API response for authentication
 */
export type AuthApiResponse = ApiResponse<AuthResponse>;

