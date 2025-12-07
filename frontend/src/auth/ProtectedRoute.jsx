import { useAuthStore } from "./authStore";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = useAuthStore((s) => s.token);
  if (!token) return <Navigate to="/login" />;
  return children;
};

export default ProtectedRoute;
