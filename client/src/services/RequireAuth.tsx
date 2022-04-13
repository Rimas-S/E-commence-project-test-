import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Token } from "../State/StateTypes/stateTypes";

export const RequireAuth = ({ role }: { role: string[] }) => {
  const location = useLocation();
  const token: Token | null = useSelector(
    (state: RootStateOrAny) => state.token
  );

  return token?.role && role?.includes(token?.role) ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};
