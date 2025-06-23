import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User } from '../models/auth';


interface AuthState {
  user: User | null;
  role: string | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (user: User, role: string, token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      role: null,
      token: null,
      isAuthenticated: false,
      login: (user, role, token) =>
        set({ user, role, token, isAuthenticated: true }),
      logout: () =>
        set({ user: null, role: null, token: null, isAuthenticated: false }),
    }),
    {
      name: 'auth-storage',
    }
  )
);
