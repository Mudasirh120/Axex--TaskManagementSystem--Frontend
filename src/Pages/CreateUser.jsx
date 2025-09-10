import { useState } from "react";
import { useNavigate } from "react-router";
import useStore from "../Store/store";
function CreateUser() {
  const [role, setRole] = useState("client");
  const navigate = useNavigate();
  const { logIn, token, type } = useStore();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <form
        className="flex flex-col items-center justify-center w-[90%] h-screen sm:max-w-96 m-auto gap-4 text-gray-800"
        encType="multipart/form-data"
      >
        <div className="inline-flex items-center gap-2 ">
          <p className="prata-regular text-3xl font-semibold">
            ADD {role.toUpperCase()}
          </p>
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
        <div className="flex flex-col items-center gap-2">
          <input id="pfp" type="file" hidden />
          <label htmlFor="pfp" className="cursor-pointer">
            <img
              src="/addImage.png"
              alt="Pfp"
              className="rounded h-20 w-20 object-contain"
            />
          </label>
        </div>
        <input
          name="name"
          required
          type="name"
          className="w-full px-3 py-2 border border-gray-800 placeholder:text-gray-600"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
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
        <input
          name="address"
          required
          type="text"
          className="w-full px-3 py-2 border border-gray-800 placeholder:text-gray-600"
          placeholder="Street Address"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <div className="grid grid-cols-2 gap-2 w-full">
          <input
            name="city"
            required
            type="text"
            className="w-full px-3 py-2 border border-gray-800 placeholder:text-gray-600"
            placeholder="City"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <input
            name="state"
            required
            type="text"
            className="w-full px-3 py-2 border border-gray-800 placeholder:text-gray-600"
            placeholder="State"
            value={state}
            onChange={(e) => {
              setState(e.target.value);
            }}
          />
        </div>
        <input
          name="country"
          required
          type="text"
          className="w-full px-3 py-2 border border-gray-800 placeholder:text-gray-600"
          placeholder="Country"
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        />
        <button
          onClick={() => {}}
          type="submit"
          className="text-white bg-black px-8 py-2 mt-1 font-semibold"
        >
          Add User
        </button>
      </form>
    </div>
  );
}
export default CreateUser;
