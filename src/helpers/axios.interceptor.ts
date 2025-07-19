import axios, { type InternalAxiosRequestConfig } from "axios";

export const fetchAPI = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL_API,
});

fetchAPI.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

fetchAPI.interceptors.response.use((response) => {
  return response;
}, (error) => {
  return Promise.reject(error);
});