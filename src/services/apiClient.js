import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:4000/api",
  timeout: 15000,
});

api.interceptors.request.use((config) => {
  // Example: attach auth token later
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    // Centralized error handling hook
    return Promise.reject(err);
  }
);

export default api;


