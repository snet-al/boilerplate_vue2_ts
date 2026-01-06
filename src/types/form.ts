// form types

import { ValidationRule } from './component';

/**
 * Form field configuration
 */
export interface FormField {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  rules?: ValidationRule[];
  options?: FormFieldOption[];
  value?: any;
  disabled?: boolean;
  readonly?: boolean;
  hidden?: boolean;
  component?: string;
  props?: Record<string, any>;
}

/**
 * Form field option (for select, radio, checkbox)
 */
export interface FormFieldOption {
  label: string;
  value: any;
  disabled?: boolean;
}

/**
 * Form state
 */
export interface FormState {
  values: Record<string, any>;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
  dirty: Record<string, boolean>;
  isValid: boolean;
  isSubmitting: boolean;
}

/**
 * Form submission handler
 */
export type FormSubmitHandler<T = any> = (values: T) => Promise<void> | void;

/**
 * Form validation handler
 */
export type FormValidationHandler<T = any> = (values: T) => Record<string, string> | null;

/**
 * Form reset handler
 */
export type FormResetHandler = () => void;

/**
 * Form field change handler
 */
export type FormFieldChangeHandler = (name: string, value: any) => void;

/**
 * Form configuration
 */
export interface FormConfig {
  fields: FormField[];
  initialValues?: Record<string, any>;
  validation?: FormValidationHandler;
  onSubmit?: FormSubmitHandler;
  onReset?: FormResetHandler;
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
}

