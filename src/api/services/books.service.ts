import apiClient from "../client";

export const booksService = {
  getAll: async () => {
    const response = await apiClient.get<Book[]>("/books");
    return response.data;
  },

  getById: async (id: string) => {
    const response = await apiClient.get<Book>(`/books/${id}`);
    return response.data;
  },

  create: async (book: Omit<Book, "id">) => {
    const response = await apiClient.post<Book>("/books", book);
    return response.data;
  },

  update: async (id: string, book: Partial<Book>) => {
    const response = await apiClient.patch<Book>(`/books/${id}`, book);
    return response.data;
  },

  delete: async (id: string) => {
    const response = await apiClient.delete(`/books/${id}`);
    return response.data;
  },
};
