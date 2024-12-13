import api from "../config/api";

export function logout() {
  localStorage.removeItem('token');
  window.location.href = '/login';
}

export function login({ user_name, password } : { user_name: string, password: string }) {
  return api.post('/auth/login' , {user_name, password })
} 