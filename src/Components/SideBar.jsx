import { NavLink, useLocation, useNavigate } from "react-router";
import useStore from "../Store/store";
import { useEffect } from "react";
function SideBar() {
  const { logOut, token } = useStore();
  const location = useLocation();
  const navigate = useNavigate();
  const routes = location.pathname.split("/");
  const role = routes[1];
  useEffect(() => {
    if (!token) navigate("/");
  }, [token]);
  return (
    <div className="h-screen flex flex-col items-center justify-between border border-r-slate-300 py-2">
      <div className="w-full">
        <div className="flex flex-col items-center mb-10 gap-2">
          <img
            src="/download.jpeg"
            alt="Pfp"
            className="rounded-full h-24 w-24 object-cover "
          />
          <p className=" text-3xl font-bold">User Name</p>
          <p className="">User Email</p>
          <p className="">Role</p>
        </div>
        <div className="flex flex-col items-center mb-10 w-full">
          <NavLink
            to={"/admin/create"}
            className={({ isActive }) =>
              `border-gray-400 border-x-0 border-y-1 p-2 w-full text-center ${
                isActive ? "bg-gray-300" : "text-black"
              }`
            }
          >
            Create
          </NavLink>
          <NavLink
            to={"/admin/view"}
            className={({ isActive }) =>
              `border-gray-400 border-x-0 border-y-1 p-2 w-full text-center ${
                isActive ? "bg-gray-300" : "text-black"
              }`
            }
          >
            View
          </NavLink>
        </div>
      </div>
      <button
        className="bg-black text-white px-4 py-2 rounded-md"
        onClick={async () => {
          const res = await logOut(role);
          if (res.data.success) {
            navigate("/");
          }
          console.log(res);
        }}
      >
        Log Out
      </button>
    </div>
  );
}
export default SideBar;
