import { Routes, Route } from "react-router";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { ToastContainer } from "react-toastify";
import Dashboard from "./Pages/Dashboard";
import CreateTask from "./Pages/CreateTask";
import PendingTasks from "./Pages/PendingTasks";
import FinishedTasks from "./Pages/FinishedTasks";
import EditTask from "./Pages/EditTask";
function App() {
  return (
    <div>
      <ToastContainer autoClose={500} />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create" element={<CreateTask />} />
          <Route path="/pending" element={<PendingTasks />} />
          <Route path="/completed" element={<FinishedTasks />} />
          <Route path="/edit" element={<EditTask />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
export default App;
