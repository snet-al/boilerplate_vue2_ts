// component prop and event types

/**
 * Base component props interface
 */
export interface BaseComponentProps {
  id?: string;
  class?: string;
  style?: string | Record<string, any>;
}

/**
 * Component with loading state
 */
export interface WithLoading {
  loading?: boolean;
}

/**
 * Component with disabled state
 */
export interface WithDisabled {
  disabled?: boolean;
}

/**
 * Component with error state
 */
export interface WithError {
  error?: string | null;
}

/**
 * Component size variants
 */
export type ComponentSize = 'small' | 'medium' | 'large';

/**
 * Component color variants
 */
export type ComponentColor = 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';

/**
 * Vue 2 component instance type
 * Usage in your code:
 *   import Vue from 'vue';
 *   type MyComponent = InstanceType<typeof Vue>;
 * 
 * Or use this generic type for component references
 */
export type VueComponentInstance = any; // Vue 2 component instance

/**
 * Component event handler type
 */
export type ComponentEventHandler<T = any> = (event: T) => void;

/**
 * Form component props
 */
export interface FormComponentProps extends BaseComponentProps, WithDisabled {
  value?: any;
  label?: string;
  placeholder?: string;
  required?: boolean;
  rules?: ValidationRule[];
  error?: string | null;
}

/**
 * Validation rule type
 */
export interface ValidationRule {
  required?: boolean;
  message?: string;
  validator?: (value: any) => boolean | string;
  trigger?: 'blur' | 'change';
}

/**
 * Button component props
 */
export interface ButtonProps extends BaseComponentProps, WithDisabled, WithLoading {
  type?: 'button' | 'submit' | 'reset';
  variant?: ComponentColor;
  size?: ComponentSize;
  outlined?: boolean;
  text?: boolean;
  icon?: string;
  block?: boolean;
}

/**
 * Input component props
 */
export interface InputProps extends FormComponentProps {
  type?: string;
  autocomplete?: string;
  readonly?: boolean;
  clearable?: boolean;
  prependIcon?: string;
  appendIcon?: string;
}

