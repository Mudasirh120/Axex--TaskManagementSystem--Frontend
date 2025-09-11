import { Routes, Route } from "react-router";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { ToastContainer } from "react-toastify";
import Dashboard from "./Pages/Dashboard";
import CreateTask from "./Pages/CreateTask";
import PendingTasks from "./Pages/PendingTasks";
import FinishedTasks from "./Pages/FinishedTasks";
import EditTask from "./Pages/EditTask";
import ViewUser from "./Pages/ViewUser";
import ProtectedRoute from "./Components/ProtectedRoute";
import useStore from "./Store/store";
import { useEffect } from "react";
import CreateUser from "./Pages/CreateUser";
import SingleProfile from "./Pages/SingleProfile";
function App() {
  const { checkAuth } = useStore();
  useEffect(() => {
    (async () => {
      const res = await checkAuth();
      console.log(res);
    })();
  }, []);
  return (
    <div>
      <ToastContainer autoClose={800} />
      <Routes>
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              {" "}
              <Home />{" "}
            </ProtectedRoute>
          }
        >
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/create" element={<CreateUser />} />
          <Route path="/admin/view" element={<ViewUser />} />
          <Route path="/admin/:role/profile/:id" element={<SingleProfile />} />
          {/* <Route path="/admin/create" element={<CreateTask />} /> */}
          <Route path="/admin/pending" element={<PendingTasks />} />
          <Route path="/admin/completed" element={<FinishedTasks />} />
          <Route path="/admin/edit" element={<EditTask />} />
        </Route>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}
export default App;
