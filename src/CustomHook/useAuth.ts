"use client";

import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiClient } from "@/lib/apiClient";
import {
  loginSuccess,
  loginFailure,
  setLoading,
  logout as logoutAction,
  restoreAuth,
  updateAccessToken,
  clearError,
} from "@/Redux/Slices/authSlice";

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterCredentials {
  email: string;
  name: string;
  password: string;
}

export const useAuth = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state: any) => state.auth);

  // Initialize auth from localStorage
  const initializeAuth = useCallback(() => {
    if (typeof window !== "undefined") {
      const accessToken = localStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");
      const user = localStorage.getItem("user");

      if (accessToken && refreshToken && user) {
        dispatch(
          restoreAuth({
            user: JSON.parse(user),
            accessToken,
            refreshToken,
          }),
        );
      }
    }
  }, [dispatch]);

  // Login functionality
  const login = useCallback(
    async (credentials: LoginCredentials) => {
      dispatch(setLoading(true));
      try {
        const { data } = await apiClient.api.post("/api/login", credentials);
        apiClient.setAccessToken(data.accessToken);
        apiClient.setRefreshToken(data.refreshToken);
        dispatch(
          loginSuccess({
            user: data.user,
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
          }),
        );
        return data;
      } catch (error: any) {
        const errorMessage = error.response?.data?.error || "Login failed";
        dispatch(loginFailure(errorMessage));
        throw error;
      }
    },
    [dispatch],
  );

  // Register functionality
  const register = useCallback(
    async (credentials: RegisterCredentials) => {
      dispatch(setLoading(true));
      try {
        const { data } = await apiClient.api.post("/api/register", credentials);
        apiClient.setAccessToken(data.accessToken);
        apiClient.setRefreshToken(data.refreshToken);
        dispatch(
          loginSuccess({
            user: data.user,
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
          }),
        );
        return data;
      } catch (error: any) {
        const errorMessage =
          error.response?.data?.error || "Registration failed";
        dispatch(loginFailure(errorMessage));
        throw error;
      }
    },
    [dispatch],
  );

  // Logout functionality
  const logout = useCallback(async () => {
    try {
      await apiClient.api.post("/api/logout");
      apiClient.clearTokens();
      dispatch(logoutAction());
    } catch (error) {
      console.error("Logout error:", error);
      apiClient.clearTokens();
      dispatch(logoutAction());
    }
  }, [dispatch]);

  // Refresh access token
  const refreshAccessToken = useCallback(async () => {
    try {
      const refreshToken = apiClient.getRefreshToken();
      if (!refreshToken) throw new Error("No refresh token available");

      const { data } = await apiClient.api.post("/api/refresh-token", {
        refreshToken,
      });

      apiClient.setAccessToken(data.accessToken);
      dispatch(updateAccessToken(data.accessToken));
      return data.accessToken;
    } catch (error) {
      logout();
      throw error;
    }
  }, [dispatch, logout]);

  const clearAuthError = useCallback(() => {
    dispatch(clearError());
  }, [dispatch]);

  return {
    user: auth.user,
    accessToken: auth.accessToken,
    refreshToken: auth.refreshToken,
    isAuthenticated: auth.isAuthenticated,
    isLoading: auth.isLoading,
    error: auth.error,
    login,
    register,
    logout,
    initializeAuth,
    refreshAccessToken,
    clearAuthError,
  };
};
