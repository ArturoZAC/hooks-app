import { createBrowserRouter, Navigate } from "react-router";
import { ProfilePage } from "../pages/profile/ProfilePage";
import { LoginPage } from "../pages/auth/LoginPage";
import { AboutPage } from "../pages/about/AboutPage";
import { PrivateRouter } from "./PrivateRouter";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AboutPage />,
  },
  {
    path: "/profile",
    element: <PrivateRouter element={<ProfilePage />} />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <Navigate to={"/"} />,
  },
]);
