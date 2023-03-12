import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

interface Props {}
const MinimalLayout: React.FC<Props> = () => {
    return (
        <Box sx={{ display: "flex", height: "100%" }}>
            <Outlet />
        </Box>
    );
};
export default MinimalLayout;
