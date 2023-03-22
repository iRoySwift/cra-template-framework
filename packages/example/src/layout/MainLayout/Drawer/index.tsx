import { useMemo } from "react";
import { Box, Drawer, useMediaQuery, useTheme } from "@mui/material";
import MiniDrawerStyled from "./MiniDrawerStyled";
import DrawerHeader from "./DrawerHeader";
import DrawerContent from "./DrawerContent";
import { drawerWidth } from "@/config";
// import { ThemeOptions } from "@/themes";
// import { drawerWidth } from "@/config";

interface Props {
    open?: boolean;
    handleDrawerToggle?: () => void;
}
const MainDrawer: React.FC<Props> = ({ open, handleDrawerToggle }) => {
    const theme = useTheme();
    const matchDownMD = useMediaQuery(theme!.breakpoints!.down("lg"));
    console.log("🚀 ~ file: index.tsx:14 ~ matchDownMD:", matchDownMD, open, Drawer, handleDrawerToggle);

    // const container = window !== undefined ? () => window.document.body : undefined;

    const drawerHeader = useMemo(() => <DrawerHeader open={open} />, [open]);
    const drawerContent = useMemo(() => <DrawerContent />, []);
    return (
        <Box component="nav">
            {matchDownMD ? (
                <Drawer
                    anchor="left"
                    variant="temporary"
                    onClose={handleDrawerToggle}
                    open={open}
                    ModalProps={{ keepMounted: true }}
                    sx={{
                        display: { xs: "block", lg: "none" },
                        "& .MuiDrawer-paper": {
                            width: drawerWidth,
                            boxSizing: "border-box",
                            borderRight: `1px solid ${theme.palette.divider}`,
                            boxShadow: "inherit",
                            backgroundImage: "none"
                        }
                    }}>
                    {open && drawerHeader}
                    {open && drawerContent}
                </Drawer>
            ) : (
                <MiniDrawerStyled variant="permanent" anchor="left" open={open}>
                    {drawerHeader}
                    {drawerContent}
                </MiniDrawerStyled>
            )}
        </Box>
    );
};
export default MainDrawer;
