// assets
// import { DashboardOutlined } from '@ant-design/icons';
import { Window } from "@mui/icons-material";

// icons
const icons = {
    Window
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
    id: "group-dashboard",
    title: "Navigation",
    type: "group",
    children: [
        {
            id: "dashboard",
            title: "Dashboard",
            type: "item",
            url: "/dashboard/default",
            icon: icons.Window,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
