import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider.jsx";
import { ROLES } from "../config/roles.js";

export default function RoleGuard({ allow = [ROLES.ENTREPRENEUR], children }) {
  const { user } = useAuth();

  if (!user || !allow.includes(user.role)) {
    return <Navigate to="/auth/login" replace />;
  }

  return children;
}
