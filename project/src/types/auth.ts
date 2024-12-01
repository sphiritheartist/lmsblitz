export type UserRole = 'student' | 'educator' | 'trainer';

export interface User {
  id: string;
  username: string;
  role: UserRole;
  name: string;
  email: string;
  token?: string; // For token-based authentication
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

// Sample initialization of AuthState (example):
const authState: AuthState = {
  user: null,
  isAuthenticated: false,
  login: async (credentials) => {
    // Authentication logic for login
  },
  logout: () => {
    // Logic to logout the user
  },
};
