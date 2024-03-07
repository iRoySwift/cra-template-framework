import { useRoutes } from "react-router-dom";
import LoginRoutes from "./LoginRoute";
import MainRoute from "./MainRoute";

export let routes = [MainRoute, LoginRoutes];

export default function Routes() {
    return useRoutes(routes);
}
