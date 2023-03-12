import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const MinimalLayout = lazy(() => import("@/layout/MinimalLayout"));
const Login = lazy(() => import("@/pages/Login"));
const Register = lazy(() => import("@/pages/Register"));
const Home = lazy(() => import("@/pages/Home"));

const LoginRoutes: RouteObject = {
    path: "/",
    element: <MinimalLayout />,
    children: [
        {
            path: "home",
            element: <Home />
        },
        {
            path: "register",
            element: <Register />
        },
        {
            path: "login",
            element: <Login />
        }
    ]
};

export default LoginRoutes;
