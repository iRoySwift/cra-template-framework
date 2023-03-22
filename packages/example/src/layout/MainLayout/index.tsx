import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import Drawer from "./Drawer";
import Header from "./Header";
import withLayoutContent, { closeDrawer, openDrawer, useLayoutDispatch, useLayoutState } from "@/content/withLayoutContent";
import BreadCrumbs from "@/components/@extended/BreadCrumbs";
// import { useAppDispatch, useAppSelector } from "@/hooks/store";
// import { openDrawer } from "@/store/reducer/menu";

interface Props {}
const MainLayout: React.FC<Props> = withLayoutContent(() => {
    const { drawer } = useLayoutState();
    const dispatch = useLayoutDispatch();
    // store
    // const dispatch = useAppDispatch();
    // const { drawerOpen } = useAppSelector(state => state.menu);
    // const [open, setOpen] = useState(drawerOpen);
    // console.log("🚀 ~ file: index.tsx:14 ~ open:", open);
    const handleDrawerToggle = () => {
        // setOpen(!open);
        dispatch(drawer ? closeDrawer() : openDrawer());
    };

    return (
        <Box sx={{ display: "flex", width: "100%" }}>
            <Header open={drawer} handleDrawerToggle={handleDrawerToggle} />
            <Drawer open={drawer} handleDrawerToggle={handleDrawerToggle} />
            <Box component="main" sx={{ width: "100%", flexGrow: 1, p: { xs: 2, sm: 3 } }}>
                <Toolbar />
                <BreadCrumbs />
                <Outlet />
            </Box>
        </Box>
    );
});
export default MainLayout;
