import axios from "axios";

const api = axios.create({
  baseURL: "https://ecommerce-backend-735s.onrender.com/api/v1",
  // baseURL: "http://localhost:4000/api/v1",
});

//  Add token automatically for every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;