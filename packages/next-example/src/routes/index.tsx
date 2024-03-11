import { Squares2X2Icon } from "@heroicons/react/16/solid";

const dashboard = [
    {
        id: "navigation",
        title: "Navigation",
        group: "Navigation",
        icon: <Squares2X2Icon />,
        children: [
            {
                id: "dashboard",
                title: "Dashboard",
                url: "/",
            },
            {
                id: "home",
                title: "Home",
                url: "/",
            },
        ],
    },
    {
        id: "navigation2",
        title: "Navigation2",
        group: "Navigation2",
        icon: <Squares2X2Icon />,
    },
];

export { dashboard };
