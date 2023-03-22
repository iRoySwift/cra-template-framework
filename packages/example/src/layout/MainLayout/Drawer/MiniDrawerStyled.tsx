import { CSSObject, Drawer, styled } from "@mui/material";
import { drawerWidth } from "@/config";
import { ThemeOptions } from "@/themes";

const openedMixin = (theme: ThemeOptions): CSSObject => ({
    width: drawerWidth,
    borderRight: `1px solid ${theme.palette!.divider}`,
    transition: theme.transitions!.create!("width", {
        easing: theme.transitions!.easing!.sharp,
        duration: theme.transitions!.duration!.enteringScreen
    }),
    overflowX: "hidden"
});

const closedMixin = (theme: ThemeOptions): CSSObject => ({
    transition: theme.transitions!.create!("width", {
        easing: theme.transitions!.easing!.sharp,
        duration: theme.transitions!.duration!.leavingScreen
    }),
    overflowX: "hidden",
    width: `calc(${theme!.spacing!(7)} + 4px)`,
    borderRight: "none",
    boxShadow: theme.customShadows.z1
    // [theme.breakpoints.up("sm")]: {
    //     width: `calc(${theme.spacing(8)} + 1px)`
    // }
});

const MiniDrawerStyled = styled(Drawer, { shouldForwardProp: prop => prop !== "open" })(({ theme, open }) => ({
    width: drawerWidth,
    zIndex: theme.zIndex.drawer + 1,

    // flexShrink: 0,
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme)
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme)
    })
}));

export default MiniDrawerStyled;
