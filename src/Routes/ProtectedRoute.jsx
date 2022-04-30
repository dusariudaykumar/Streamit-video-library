import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../Contexts";

export const ProtectedRoute = () => {
  const location = useLocation();
  const {
    authState: { isAuth },
  } = useAuth();
  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location.pathname }} />
  );
};
