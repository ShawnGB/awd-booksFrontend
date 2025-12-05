interface Book {
  id: string;
  title: string;
  author: string;
}

interface LoginResponse {
  access_token: string;
}

interface UserResponse {
  id: string;
  username: string;
  email: string;
}

interface User {
  id: string;
  username: string;
  email?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  register: (
    username: string,
    email: string,
    password: string,
  ) => Promise<void>;
  logout: () => void;
}
