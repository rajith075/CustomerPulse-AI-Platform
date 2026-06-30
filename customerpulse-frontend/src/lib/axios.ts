import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 30000,

  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token =
      typeof window !== "undefined"
        ? localStorage.getItem("accessToken")
        : null;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },

  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,

  (error) => {
    if (error.response?.status === 401) {
      console.log("Unauthorized");
    }

    if (error.response?.status === 404) {
      console.log("API Not Found");
    }

    if (error.response?.status === 500) {
      console.log("Server Error");
    }

    return Promise.reject(error);
  }
);

export default api;