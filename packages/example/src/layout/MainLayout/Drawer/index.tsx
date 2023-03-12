import { useMemo } from "react";
import { Box, Drawer, useMediaQuery, useTheme } from "@mui/material";
import MiniDrawerStyled from "./MiniDrawerStyled";
import DrawerHeader from "./DrawerHeader";
import DrawerContent from "./DrawerContent";
import { drawerWidth } from "@/config";

interface Props {
    open?: boolean;
    handleDrawerToggle?: () => void;
}
const MainDrawer: React.FC<Props> = ({ open, handleDrawerToggle }) => {
    const theme = useTheme();
    const matchDownMD = useMediaQuery(theme.breakpoints.down("lg"));
    console.log("🚀 ~ file: index.tsx:14 ~ matchDownMD:", matchDownMD, open, Drawer, handleDrawerToggle);

    const container = window !== undefined ? () => window.document.body : undefined;

    const drawerHeader = useMemo(() => <DrawerHeader open={open} />, [open]);
    const drawerContent = useMemo(() => <DrawerContent />, []);
    return (
        <Box component="nav">
            {!matchDownMD ? (
                <MiniDrawerStyled
                    variant="permanent"
                    anchor="left"
                    open={open}>
                    {drawerHeader}
                    {drawerContent}
                </MiniDrawerStyled>
            ) : (
                <Drawer
                    container={container}
                    variant="temporary"
                    anchor="left"
                    ModalProps={{ keepMounted: true }}
                    onClose={handleDrawerToggle}
                    open={true}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth }
                    }}>
                    {open && drawerHeader}
                    {open && drawerContent}
                </Drawer>
            )}
        </Box>
    );
};
export default MainDrawer;
