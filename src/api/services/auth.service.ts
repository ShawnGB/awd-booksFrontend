import apiClient from "../client";

export const authService = {
  login: async (username: string, password: string): Promise<LoginResponse> => {
    const response = await apiClient.post<LoginResponse>("/auth/login", {
      username,
      password,
    });
    return response.data;
  },

  register: async (
    username: string,
    email: string,
    password: string,
  ): Promise<UserResponse> => {
    const response = await apiClient.post<UserResponse>("/users", {
      username,
      email,
      password,
    });
    return response.data;
  },
};
