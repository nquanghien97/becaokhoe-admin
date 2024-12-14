import api from "../config/api";

export function getAllNews({ page, page_size, title, category } : { page?: number, page_size?: number, title?: string, category?: string }) {
  const params = new URLSearchParams();
  if (page) params.append('page', page.toString());
  if (page_size) params.append('page_size', page_size.toString());
  if (title) params.append('title', title.toString());
  if (category) params.append('category', category.toString());
  return api.get(`/news?${params.toString()}`)
}

export function createNews(data: FormData) {
  return api.post('news', data)
}

export function getNews(id: number) {
  return api.get(`/news/${id}`)
}

export function updateNews(id: number, data: FormData) {
  return api.put(`/news/${id}`, data)
}

export function deleteNews(id: number) {
  return api.delete(`/news/${id}`)
} 