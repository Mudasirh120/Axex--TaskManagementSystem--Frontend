import { create } from "zustand";
import axios from "axios";
import { toast } from "react-toastify";
const backendUrl = import.meta.env.VITE_BACKEND_URL;
const useStore = create((set, get) => ({
  type: null,
  token: null,
  setToken: (val) => set({ token: val }),
  setType: (val) => set({ type: val }),
  api: axios.create({
    baseURL: backendUrl,
    withCredentials: true,
  }),
  checkAuth: async () => {
    const api = get().api;
    const res = await api.post(`/api/checkAuth`);
    set({ token: res.data.success });
    set({ type: res.data.role });
    return res;
  },
  logIn: async (endpoint, data) => {
    try {
      const api = get().api;
      const { email, password, role } = data;
      const res = await api.post(endpoint, {
        email,
        password,
        role,
      });
      if (res.data.success) {
        set({ token: res.data.success });
        set({ type: res.data.role });
        toast.success(res.data.message);
        return res;
      } else {
        set({ token: null });
        set({ type: null });
        toast.error(res.response.data.message);
        return res;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  },
  logOut: async (role) => {
    const api = get().api;
    try {
      const res = await api.post(`/api/${role}/logout`);
      if (res.data.success) {
        set({ token: null });
        set({ type: null });
        toast.success(res.data.message);
        return res;
      } else {
        toast.success(res.data.message);
        return res;
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },
}));
export default useStore;
