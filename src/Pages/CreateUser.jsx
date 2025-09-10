import { useState } from "react";
import { useNavigate } from "react-router";
import useStore from "../Store/store";
import Input from "../Components/Input";
function CreateUser() {
  const [role, setRole] = useState("client");
  const navigate = useNavigate();
  const { logIn, token, type, register } = useStore();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const submit = async () => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("name", name);
    formData.append("pfp", image);
    formData.append("password", password);
    formData.append("role", role);
    formData.append("address", address);
    formData.append("city", city);
    formData.append("state", state);
    formData.append("country", country);
    console.log("");
    const res = await register(`/api/${role}/register`, formData);
    console.log(res);
  };
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
          <input
            id="pfp"
            name="pfp"
            type="file"
            hidden
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
          <label htmlFor="pfp" className="cursor-pointer">
            <img
              src={image ? URL.createObjectURL(image) : "/addImage.png"}
              alt="Pfp"
              className="rounded h-20 w-20 object-contain"
            />
          </label>
        </div>
        <Input
          type={"text"}
          value={name}
          setValue={setName}
          placeholder={"Name"}
        />
        <Input
          type={"email"}
          value={email}
          setValue={setEmail}
          placeholder={"Email"}
        />
        <Input
          type={"password"}
          value={password}
          setValue={setPassword}
          placeholder={"Password"}
        />
        <Input
          type={"text"}
          value={address}
          setValue={setAddress}
          placeholder={"Address"}
        />
        <div className="grid grid-cols-2 gap-2 w-full">
          <Input
            type={"text"}
            value={city}
            setValue={setCity}
            placeholder={"City"}
          />
          <Input
            type={"text"}
            value={state}
            setValue={setState}
            placeholder={"State"}
          />
        </div>
        <Input
          type={"text"}
          value={country}
          setValue={setCountry}
          placeholder={"Country"}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            submit();
          }}
          type="submit"
          className="text-white bg-black px-8 py-2 mt-1 font-semibold"
        >
          Add {role.charAt(0).toUpperCase() + role.slice(1)}
        </button>
      </form>
    </div>
  );
}
export default CreateUser;
