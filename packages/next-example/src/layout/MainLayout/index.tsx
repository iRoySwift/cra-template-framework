"use client";

import React from "react";
import Header from "./Header";
import Drawer from "./Drawer";
import { useDrawerStore } from "@/store";

interface Props {
    children: React.ReactNode;
}
const MainLayout: React.FC<Props> = props => {
    const { children } = props;
    const { drawer } = useDrawerStore();

    return (
        <div className="flex min-h-screen w-full">
            <Header drawer={drawer} />
            <Drawer drawer={drawer} />
            <main className="min-h-screen w-full">{children}</main>
        </div>
    );
};
export default MainLayout;
