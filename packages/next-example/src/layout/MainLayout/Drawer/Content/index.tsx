"use client";
import { Menu } from "@/components/ui";
import { dashboard } from "@/routes";
import React, { useState } from "react";

interface Props {
    drawer?: boolean;
}
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
