// src/models/auth.d.ts

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  adminCode: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface LoginResponse {
  token: string;
  role: 'admin' | 'member';
  user: User;
}
