import { Navigate } from "react-router";
import useStore from "../Store/store";
export default function ProtectedRoute({ children }) {
  const isAuthenticated = useStore((state) => state.token);
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
}
