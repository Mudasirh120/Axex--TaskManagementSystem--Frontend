import { Outlet, useLocation, useNavigate } from "react-router";
import SideBar from "../Components/SideBar";
import { useEffect } from "react";
import useStore from "../Store/store";
function Home() {
  const { token, setToken, checkAuth } = useStore();
  const location = useLocation();
  const navigate = useNavigate();
  const routes = location.pathname.split("/");
  const role = routes[1];
  const fetchAuth = async () => {
    const res = await checkAuth(role);
    setToken(res.data.success);
  };
  useEffect(() => {
    fetchAuth();
  }, [location.pathname]);
  useEffect(() => {
    fetchAuth();
    if (!token) navigate("/admin");
  }, [token]);
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
