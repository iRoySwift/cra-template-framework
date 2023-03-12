import { Box, IconButton, useTheme } from "@mui/material";
import React from "react";
import InputBase from "@mui/material/InputBase";
import {
    LightModeOutlined as LightModeOutlinedIcon,
    DarkModeOutlined as DarkModeOutlinedIcon,
    NotificationsOutlined as NotificationsOutlinedIcon,
    SettingsOutlined as SettingsOutlinedIcon,
    PersonOutlined as PersonOutlinedIcon,
    Search as SearchIcon
} from "@mui/icons-material";
// import { ColorModeContent, tokens } from '@/themes';

interface Props {}
const Topbar: React.FC<Props> = () => {
    const theme = useTheme();
    // const colors = tokens(theme.palette.mode);
    // const colorMode = useContext(ColorModeContent);

    // useEffect(() => {
    //   console.log(theme, colors, colorMode);
    // }, [colorMode, colors, theme]);

    return (
        <Box
            display="flex"
            justifyContent="space-between"
            p={2}>
            {/* SEARCH BAR */}
            <Box
                sx={{
                    // backgroundColor: colors.primary![400],
                    display: "flex",
                    borderRadius: "3px"
                }}>
                <InputBase
                    sx={{ flex: 1, ml: 2 }}
                    placeholder="Search"
                />
                <IconButton
                    type="button"
                    sx={{ p: 1 }}>
                    <SearchIcon />
                </IconButton>
            </Box>
            {/* ICONS */}
            <Box display="flex">
                <IconButton>{theme.palette.mode === "dark" ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}</IconButton>
                <IconButton>
                    <NotificationsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <PersonOutlinedIcon />
                </IconButton>
                <IconButton>
                    <SearchIcon />
                </IconButton>
            </Box>
        </Box>
    );
};
export default Topbar;
