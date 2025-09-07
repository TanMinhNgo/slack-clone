//https://slack-backend-beige.vercel.app/api
import axios from "axios";

const BASE_URL =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_API_BASE_URL
    : import.meta.env.VITE_API_BACKEND_URL;


export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export default axiosInstance;
