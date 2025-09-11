import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useStore from "../Store/store";
import Input from "../Components/Input";
function CreateUser() {
  const [role, setRole] = useState("client");
  const navigate = useNavigate();
  const { logIn, token, type, register, getUsers } = useStore();
  const [email, setEmail] = useState("");
  const [assistants, setAssistants] = useState([]);
  const [assignedAssistant, setAssignedAssistant] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    (async () => {
      if (role === "client") {
        const res = await getUsers("assistant");
        console.log(res);
        setAssistants(res.data.allUsers);
      }
    })();
  }, [role]);
  const submit = async () => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("name", name);
    formData.append("password", password);
    formData.append("role", role);
    formData.append("pfp", image);
    if (role === "client") {
      formData.append("city", city);
      formData.append("state", state);
      formData.append("country", country);
      if (assignedAssistant) {
        formData.append("assistantEmail", assignedAssistant);
      }
    }
    const res = await register(`/api/user/register`, formData);
    console.log(res);
  };
  return (
    <div>
      <form
        className="flex flex-col items-center my-4 w-[90%] h-screen sm:max-w-96 m-auto gap-4 text-gray-800"
        encType="multipart/form-data"
      >
        <div className="grid grid-cols-2 gap-2">
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
          required={true}
        />
        <Input
          type={"email"}
          value={email}
          setValue={setEmail}
          placeholder={"Email"}
          required={true}
        />
        <Input
          type={"password"}
          value={password}
          setValue={setPassword}
          placeholder={"Password"}
          required={true}
        />
        {role === "client" && (
          <>
            <select
              name=""
              id=""
              className="w-full px-3 py-2 border border-gray-800 placeholder:text-gray-600"
              onClick={(e) => {
                setAssignedAssistant(e.target.value);
              }}
            >
              <option disabled selected value>
                Select an Assistant
              </option>
              {assistants.map((assistant) => (
                <option value={assistant.email} key={assistant._id}>
                  {assistant.name}
                </option>
              ))}
            </select>
            <div className="grid grid-cols-2 gap-2 w-full">
              <Input
                type={"text"}
                value={city}
                setValue={setCity}
                placeholder={"City"}
                required={false}
              />
              <Input
                type={"text"}
                value={state}
                setValue={setState}
                placeholder={"State"}
                required={false}
              />
            </div>
            <Input
              type={"text"}
              value={country}
              setValue={setCountry}
              placeholder={"Country"}
              required={false}
            />
          </>
        )}
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
