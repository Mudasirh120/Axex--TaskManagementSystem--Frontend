import { useEffect, useState } from "react";
import useStore from "../Store/store";
import LoadingSpinner from "../Components/LoadingSpinner";
import { useNavigate } from "react-router";
import UserCard from "../Components/UserCard";
function ViewUser() {
  const navigate = useNavigate();
  const { getUsers } = useStore();
  const [role, setRole] = useState("client");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await getUsers(role);
      console.log(res);
      setUsers(res.data.allUsers);
    })();
  }, [role]);
  return (
    <div className="flex flex-col items-center w-[90%] h-screen m-auto mt-5 gap-4 text-gray-800">
      <div>
        <LoadingSpinner />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div
          onClick={() => {
            setRole("client");
          }}
          className={`${
            role == "client" ? "text-white bg-black" : ""
          } p-2 border border-gray-600 rounded text-center`}
        >
          Clients
        </div>
        <div
          onClick={() => {
            setRole("assistant");
          }}
          className={`${
            role == "assistant" ? "text-white bg-black" : ""
          } p-2 border border-gray-600 rounded text-center`}
        >
          Assistants
        </div>
      </div>
      <div className="w-full flex justify-center flex-wrap gap-4">
        {users.map((user) => (
          <UserCard user={user} key={user._id} />
        ))}
      </div>
    </div>
  );
}

export default ViewUser;
