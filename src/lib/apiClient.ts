import axios, { AxiosInstance, AxiosError } from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

class ApiClient {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Request interceptor to attach token
    this.instance.interceptors.request.use(
      (config) => {
        const token = this.getAccessToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );

    // Response interceptor to handle token refresh
    this.instance.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        const originalRequest = error.config as any;

        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          try {
            const refreshToken = this.getRefreshToken();
            if (refreshToken) {
              const { data } = await axios.post(
                `${API_BASE_URL}/api/refresh-token`,
                {
                  refreshToken,
                },
              );
              this.setAccessToken(data.accessToken);
              originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
              return this.instance(originalRequest);
            }
          } catch (refreshError) {
            this.clearTokens();
            redirect("/login");
          }
        }

        return Promise.reject(error);
      },
    );
  }

  setAccessToken(token: string) {
    if (typeof window !== "undefined") {
      localStorage.setItem("accessToken", token);
    }
  }

  setRefreshToken(token: string) {
    if (typeof window !== "undefined") {
      localStorage.setItem("refreshToken", token);
    }
  }

  getAccessToken(): string | null {
    if (typeof window !== "undefined") {
      return localStorage.getItem("accessToken");
    }
    return null;
  }

  getRefreshToken(): string | null {
    if (typeof window !== "undefined") {
      return localStorage.getItem("refreshToken");
    }
    return null;
  }

  clearTokens() {
    if (typeof window !== "undefined") {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");
    }
  }

  get api() {
    return this.instance;
  }
}

function redirect(path: string) {
  if (typeof window !== "undefined") {
    window.location.href = path;
  }
}

export const apiClient = new ApiClient();
