import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import Loadable from "@/components/Loadable";

import MainLayout from "@/layout/MainLayout";
const DashBoard = Loadable(lazy(() => import("@/pages/dashboard")));
const Colors = Loadable(lazy(() => import("@/components/OverviewComponents/Colors")));
const Typography = Loadable(lazy(() => import("@/components/OverviewComponents/Typography")));
const Shadow = Loadable(lazy(() => import("@/components/OverviewComponents/Shadow")));
const MuiIcon = Loadable(lazy(() => import("@/pages/MuiIcon")));
const NotFoundPage = Loadable(lazy(() => import("@/pages/404/index")));

const MainRoute: RouteObject = {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            path: "/",
            element: <DashBoard />
        },
        {
            path: "dashboard",
            children: [
                {
                    path: "default",
                    element: <DashBoard />
                }
            ]
        },
        {
            path: "typography",
            element: <Typography />
        },
        {
            path: "shadow",
            element: <Shadow />
        },
        {
            path: "color",
            element: <Colors />
        },
        {
            path: "MuiIcon",
            element: <MuiIcon />
        },
        {
            path: "404",
            element: <NotFoundPage />
        }
    ]
};
export default MainRoute;
