import { create } from "zustand";
import axios from "axios";
const backendUrl = import.meta.env.VITE_BACKEND_URL;
const useStore = create((set) => ({
  token: false,
  setToken: (bool) => set(() => ({ token: bool })),
  api: axios.create({
    baseURL: backendUrl,
    withCredentials: true,
  }),
  checkAuth: () => {},
}));
export default useStore;
