import { create } from "zustand";
import axiosClient from "../api/axiosClient";

export const useAuthStore = create((set, get) => ({
  user: null,
  token: localStorage.getItem("token") || null,
  error: null,
  signup: async (name, email, password) => {
    try {
      await axiosClient.post("/auth/signup", { name, email, password });
      return { success: true };
    } catch (e) {
      return { success: false };
    }
  },
  login: async (email, password) => {
    try {
      const res = await axiosClient.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      set({ user: res.data.user, token: res.data.token });
      return { success: true };
    } catch (e) {
      return { success: false };
    }
  },
  loadUser: async () => {
    const token = get().token;
    if (!token) return;
    try {
      const res = await axiosClient.get("/auth/me");
      set({ user: res.data.user });
    } catch (e) {
      localStorage.removeItem("token");
      set({ user: null, token: null });
    }
  },
  logout: () => {
    localStorage.removeItem("token");
    set({ user: null, token: null });
  }
}));
