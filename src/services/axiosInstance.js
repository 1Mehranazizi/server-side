import axios from "axios";
import {
  getJwtToken,
  getRefreshToken,
  removeToken,
  updateJwtToken,
} from "./tokenService";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const refresh_jwt = getJwtToken();
    if (refresh_jwt) {
      config.headers["Authorization"] = `Bearer ${refresh_jwt}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;
    if (originalConfig.url !== "/auth/login" && err.response) {
      if (err.response.status === 401 && !originalConfig._retry) {
        if (originalConfig.url === "/customers/refresh-token") {
          removeToken();
          return;
        }
        originalConfig._retry = true;
        try {
          const res = await axiosInstance.post("/customers/refresh-token", {
            refresh_token: getRefreshToken(),
          });
          updateJwtToken(res.data["Refresh-JWT"]);
          return axiosInstance(originalConfig);
        } catch (_error) {
          removeToken();
          return Promise.reject(_error);
        }
      }
    }
    return Promise.reject(err);
  }
);

export default axiosInstance;
