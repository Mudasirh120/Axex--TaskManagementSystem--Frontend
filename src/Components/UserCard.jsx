import { Navigate } from "react-router";

function UserCard({ user }) {
  return (
    <div className="w-[450px] border-1 border-gray-300 rounded bg-slate-50">
      <div className="flex border-b border-gray-300 p-2">
        <img
          src={user.picture || "/download.jpeg"}
          alt="profile photo"
          className="w-20 h-20 rounded-full object-cover"
        />
        <div className="w-full flex flex-col justify-center items-center">
          <p className="font-semibold text-xl">{user.name}</p>
          <p className="font-semibold">{user.email}</p>
        </div>
      </div>
      <div className="p-2">
        <p>
          <span>Member Since :</span>
          <span>{new Date(user.createdAt).toDateString()}</span>
        </p>
        <p>
          <span>Location :</span>
          <span>
            {user.city ? `${user.city}, ` : ""}
            {user.state ? `${user.state},` : ""}
            {user.country ? `${user.country},` : ""}
            {!user.city && !user.state && !user.country && "N/A"}
          </span>
        </p>
        <p>
          <span>Total Tasks :</span>
          <span>{user.completedTasks.length}</span>
        </p>
        <p>
          <span>Pending Tasks :</span>
          <span>{user.pendingTasks.length}</span>
        </p>
      </div>
      <div className="p-2">
        <button
          onSubmit={() => {
            Navigate(`/${user.role}/profile/${user._id}`);
          }}
          className="bg-black text-white p-2 border border-gray-600 rounded text-center mb-2 cursor-pointer"
        >
          View Profile
        </button>
      </div>
    </div>
  );
}
export default UserCard;
