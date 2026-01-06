// user types

export interface User {
  id: number;
  uuid: string;
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  birthday?: Date | string;
  password?: string;
  client?: Client;
  addresses?: Address[];
}

export interface Client {
  id: number;
  uuid: string;
  phone: string;
  mobilePhone: string;
  gender: string;
}

export interface Address {
  id?: number;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  isDefault?: boolean;
}

export interface UserState {
  user: User | null;
  success: boolean;
  loading: boolean;
  error: string | null;
}

export default User;