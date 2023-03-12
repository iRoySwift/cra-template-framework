import { AppBar, AppBarProps as MuiAppBarProps, styled } from "@mui/material";
import { drawerWidth } from "@/config";

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBarStyled = styled(AppBar, {
    shouldForwardProp: props => props !== "open"
})<AppBarProps>(({ theme, open }: any) => {
    console.log(theme, open);

    return {
        // backgroundColor: open ? theme.palette.background.paper : "red",
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        ...(open && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`
        })
    };
});
export default AppBarStyled;
