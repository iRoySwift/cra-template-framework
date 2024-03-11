"use client";
import { Menu } from "@/components/ui";
import React, { useState } from "react";
import { Squares2X2Icon } from "@heroicons/react/16/solid";

interface Props {
    drawer?: boolean;
}
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
const Content: React.FC<Props> = props => {
    const { drawer } = props;
    return (
        <div>
            <Menu
                defaultSelectKey={"dashboard"}
                drawer={drawer}
                dataSource={dashboard}></Menu>
        </div>
    );
};
export default Content;
