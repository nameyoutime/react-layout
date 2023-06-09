import React from "react";
import { User, UserRole } from "../types/User";
import { useNavigate } from "react-router-dom";
import { getDecodeToken } from "../utils/token";

export default function AuthWrapper({
  children,
  role,
}: {
  children: React.ReactNode;
  role?: UserRole;
}) {
  const navigate = useNavigate();
  const user: User | undefined = getDecodeToken();
  const currentRole = user?.role;
  React.useEffect(() => {
    if (currentRole !== String(role)) {
      setTimeout(() => {
        navigate(-1);
      }, 3000);
    }
  }, [navigate, currentRole, role]);
  if (currentRole !== String(role)) {
    return <h1>Unauthorize, Redirect back...</h1>;
  }
  return <>{children}</>;
}
