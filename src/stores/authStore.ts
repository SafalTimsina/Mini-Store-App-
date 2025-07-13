import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User{
  email:string
  isAdmin:boolean
}

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  checkAuth: () => boolean;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,

      login: async (email: string, password: string) => {
        if (email === 'admin@demo.com' && password === 'admin123') {
          const user: User = {
            email,
            isAdmin: true
          };
          
          set({ user, isAuthenticated: true });
          return true;
        }
        
        return false;
      },

      logout: () => {
        set({ user: null, isAuthenticated: false });
      },

      checkAuth: () => {
        const { user } = get();
        return !!user?.isAdmin;
      }
    }),
    {
      name: 'auth-storage'
    }
  )
);