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
        <Route path="/home" element={<Home />}>
          <Route path="/home/dashboard" element={<Dashboard />} />
          <Route path="/home/create" element={<CreateTask />} />
          <Route path="/home/pending" element={<PendingTasks />} />
          <Route path="/home/completed" element={<FinishedTasks />} />
          <Route path="/home/edit" element={<EditTask />} />
        </Route>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}
export default App;
