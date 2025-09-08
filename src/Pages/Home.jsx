import { Outlet } from "react-router";
import SideBar from "../Components/SideBar";
function Home() {
  return (
    <div className="w-full h-screen bg-black grid grid-cols-[1fr_4fr]">
      <SideBar />
      <div className="bg-orange-500">
        <Outlet />
      </div>
    </div>
  );
}
export default Home;
