import { NavLink } from "react-router";

function SideBar() {
  return (
    <div className="h-screen bg-teal-700 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center mb-10 gap-2">
        <img
          src="/download.jpeg"
          alt="Pfp"
          className="rounded-full h-24 w-24 "
        />
        <p className="text-white text-3xl font-bold">User Name</p>
        <p className="text-white">User Email</p>
        <p className="text-white">Role</p>
      </div>
      <div className="flex flex-col items-center mb-10 w-full">
        <NavLink
          to={"/home/dashboard"}
          className={`border border-x-0 border-y-2 p-2 w-full text-center`}
        >
          Dashboard
        </NavLink>
        <NavLink
          to={"/home/create"}
          className={`border border-x-0 border-y-2 p-2 w-full text-center`}
        >
          Create
        </NavLink>
        <NavLink
          to={"/home/pending"}
          className={`border border-x-0 border-y-2 p-2 w-full text-center`}
        >
          Pending Tasks
        </NavLink>
        <NavLink
          to={"/home/completed"}
          className={`border border-x-0 border-y-2 p-2 w-full text-center`}
        >
          Completed Tasks
        </NavLink>
      </div>
      <button
        className="bg-red-600 text-white px-4 py-2 rounded-md"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        Log Out
      </button>
    </div>
  );
}
export default SideBar;
