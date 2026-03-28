import axios from 'axios';

const BASE_URL = import.meta.env.MODE === "production" ? "https://campus-connect-nepw.vercel.app/api" : "/api"

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});