import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://dashboard-fastapi.vercel.app';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export interface Note {
  id: string;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  role?: string;
}

export const notesApi = {
  getAll: () => api.get<Note[]>('/api/notes/'),
  getById: (id: string) => api.get<Note>(`/api/notes/${id}`),
  create: (data: Omit<Note, 'id' | 'created_at' | 'updated_at'>) => 
    api.post<Note>('/api/notes/', data),
  update: (id: string, data: Partial<Note>) => 
    api.put<Note>(`/api/notes/${id}`, data),
  delete: (id: string) => api.delete(`/api/notes/${id}`),
};

export const authApi = {
  login: (credentials: { email: string; password: string }) =>
    api.post<{ access_token: string; token_type: string }>('/api/auth/login', credentials),
  register: (data: { name: string; email: string; password: string; role?: string }) =>
    api.post<{ access_token: string; token_type: string }>('/api/auth/signup', data),
  getProfile: () => api.get<User>('/api/auth/me'),
};

export const adminApi = {
  getAllNotes: () => api.get<Note[]>('/api/admin/notes'),
  deleteNote: (id: string) => api.delete(`/api/admin/notes/${id}`),
  updateNote: (id: string, data: Partial<Note>) => 
    api.put<Note>(`/api/admin/notes/${id}`, data),
};

export default api;