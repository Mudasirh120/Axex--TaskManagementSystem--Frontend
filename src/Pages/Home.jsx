import { Outlet } from "react-router";
import SideBar from "../Components/SideBar";
function Home() {
  return (
    <div className="w-full h-screen  grid grid-cols-[1fr_4fr]">
      <SideBar />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}
export default Home;
