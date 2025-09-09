import { create } from "zustand";
import axios from "axios";
const backendUrl = import.meta.env.VITE_BACKEND_URL;
const useStore = create((set, get) => ({
  token: false,
  setToken: (bool) => set(() => ({ token: bool })),
  api: axios.create({
    baseURL: backendUrl,
    withCredentials: true,
  }),
  checkAuth: async (role) => {
    const api = get().api;
    const res = await api.post(`/api/checkAuth/${role}`);
    return res;
  },
  logOut: async (role) => {
    const api = get().api;
    const res = await api.post(`/api/${role}/logout`);
    return res;
  },
}));
export default useStore;
