import { Routes, Route } from "react-router";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div>
      <ToastContainer autoClose={500} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
export default App;
