import { useEffect } from "react";
import useAuthState from "../hooks/useAuthState";
import { useNavigate } from "react-router-dom";
import { routes } from "../App";

const ProtectedRoutes = ({ element }) => {
  const { isAuthenticated } = useAuthState();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(routes.login);
    }
  }, [navigate, isAuthenticated]);

  if (!isAuthenticated) return null;
  return <>{element}</>;
};

export default ProtectedRoutes;
