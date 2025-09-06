import axios from "axios";

// This creates a dedicated Axios instance for your API.
// It's pre-configured with the base URL of your Laravel backend.
const apiClient = axios.create({
  // IMPORTANT: In production, this should come from an environment variable.
  // For development, we hardcode it to your local Laravel server.
  // baseURL: "http://127.0.0.1:8000/api",
  baseURL:"https://api.akvision.net/api",
  headers: {
    Accept: "application/json",
  },
});

export default apiClient;
