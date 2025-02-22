export interface User {
  id: string;
  email: string | null;
  name: string | null;
  photoURL: string | null;
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: Error | null;
}
