import { use, type FC, type JSX } from "react";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router";

interface Props {
  element: JSX.Element;
}

export const PrivateRouter: FC<Props> = ({ element }) => {
  const { authStatus } = use(UserContext);

  if (authStatus === "checking") {
    return <div>Cargando...</div>;
  }

  if (authStatus === "authenticated") {
    return element;
  }

  return <Navigate to="/login" replace />;
};
