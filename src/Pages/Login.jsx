import { useState } from "react";
import useStore from "../Store/store.js";
import { useEffect } from "react";
import { useNavigate } from "react-router";
function Login() {
  const [role, setRole] = useState("client");
  const navigate = useNavigate();
  const { logIn, token, type } = useStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const res = await logIn(`/api/${role}/login`, { email, password, role });
    if (res.data.success) {
      setEmail("");
      setPassword("");
      navigate(`/${role}`);
    }
  };
  useEffect(() => {
    if (token) navigate(`/${type}`);
  }, []);
  return (
    <form
      className="flex flex-col items-center justify-center w-[90%] h-screen sm:max-w-96 m-auto gap-4 text-gray-800"
      encType="multipart/form-data"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl font-semibold">Welcome Back</p>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div
          onClick={() => {
            setRole("client");
          }}
          className={`${
            role == "client" ? "text-white bg-black" : ""
          } p-2 border border-gray-600 rounded text-center`}
        >
          Client
        </div>
        <div
          onClick={() => {
            setRole("assistant");
          }}
          className={`${
            role == "assistant" ? "text-white bg-black" : ""
          } p-2 border border-gray-600 rounded text-center`}
        >
          Assistant
        </div>
        <div
          onClick={() => {
            setRole("admin");
          }}
          className={`${
            role == "admin" ? "text-white bg-black" : ""
          } p-2 border border-gray-600 rounded text-center`}
        >
          Admin
        </div>
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
