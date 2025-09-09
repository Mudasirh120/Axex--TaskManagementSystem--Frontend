import { useState } from "react";
import useStore from "../Store/store.js";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useNavigate } from "react-router";
function Login({ role }) {
  const navigate = useNavigate();
  const { api, token, setToken, checkAuth } = useStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const fetchAuth = async () => {
    const res = await checkAuth(role);
    console.log(res.data.success);
    setToken(res.data.success);
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post(`/api/${role}/login`, {
        email,
        password,
        role,
      });
      if (res.data.success) {
        setToken(true);
        toast.success(res.data.message);
        setEmail("");
        setPassword("");
      } else {
        toast.error(res.response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  useEffect(() => {
    fetchAuth();
    if (token) navigate(`/${role}/home`);
  }, [token]);
  return (
    <form
      className="flex flex-col items-center justify-center w-[90%] h-screen sm:max-w-96 m-auto gap-4 text-gray-800"
      encType="multipart/form-data"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">Login</p>
      </div>
      <input
        name="email"
        required
        type="email"
        className="w-full px-3 py-2 border border-gray-800 placeholder:text-gray-600"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        name="password"
        required
        type="password"
        className="w-full px-3 py-2 border border-gray-800 placeholder:text-gray-600"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot your Password</p>
      </div>
      <button
        onClick={(e) => {
          onSubmitHandler(e);
        }}
        type="submit"
        className="text-white bg-black px-8 py-2 mt-4 font-semibold"
      >
        Login
      </button>
    </form>
  );
}
export default Login;
