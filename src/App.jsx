import { Routes, Route } from "react-router";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { ToastContainer } from "react-toastify";
import Dashboard from "./Pages/Dashboard";
import CreateTask from "./Pages/CreateTask";
import PendingTasks from "./Pages/PendingTasks";
import FinishedTasks from "./Pages/FinishedTasks";
import EditTask from "./Pages/EditTask";
import UsersList from "./Pages/UsersList";
function App() {
  return (
    <div>
      <ToastContainer autoClose={800} />
      <Routes>
        <Route path="/admin/home" element={<Home />}>
          <Route path="/admin/home/dashboard" element={<Dashboard />} />
          <Route
            path="/admin/home/clients"
            element={<UsersList role={"client"} />}
          />
          <Route
            path="/admin/home/assistants"
            element={<UsersList role={"assistant"} />}
          />
          <Route path="/admin/home/create" element={<CreateTask />} />
          <Route path="/admin/home/pending" element={<PendingTasks />} />
          <Route path="/admin/home/completed" element={<FinishedTasks />} />
          <Route path="/admin/home/edit" element={<EditTask />} />
        </Route>
        <Route path="/" element={<Login role={"client"} />} />
        <Route path="/assistant" element={<Login role={"assistant"} />} />
        <Route path="/admin" element={<Login role={"admin"} />} />
      </Routes>
    </div>
  );
}
export default App;
