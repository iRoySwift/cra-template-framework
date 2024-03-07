import { lazy } from "react";
import Loadable from "@/components/Loadable";
import { RouteObject } from "react-router-dom";
import { Login as LoginIcon, Assignment } from "@mui/icons-material";

const MinimalLayout = Loadable(lazy(() => import("@/layout/MinimalLayout")));
const Login = Loadable(lazy(() => import("@/pages/Authentication/Login")));
const Register = Loadable(
    lazy(() => import("@/pages/Authentication/Register"))
);

const LoginRoutes: RouteObject | any = {
    path: "/",
    element: <MinimalLayout />,
    name: "Authentication",
    type: "group",
    children: [
        {
            path: "register",
            element: <Register />,
            name: "Register",
            type: "item",
            icon: Assignment,
            target: true,
        },
        {
            path: "login",
            element: <Login />,
            name: "Login",
            type: "item",
            icon: LoginIcon,
            target: true,
        },
    ],
};

export default LoginRoutes;
