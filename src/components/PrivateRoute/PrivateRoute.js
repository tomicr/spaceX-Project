import { Navigate } from "react-router-dom";
import { Outlet } from "react-router";
import { useAuth } from "../../contexts/AuthContext";

const PrivateRoute = () => {
  const { currentUser } = useAuth();
  return currentUser ? <Outlet /> : <Navigate to="/" />;
};
export default PrivateRoute;
