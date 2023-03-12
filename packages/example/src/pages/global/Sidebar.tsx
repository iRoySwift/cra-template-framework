import React, { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { Sidebar as ProSidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Box, IconButton, Typography } from "@mui/material";
// import { tokens } from '@/themes';
import {
    HomeOutlined as HomeOutlinedIcon,
    PeopleOutlined as PeopleOutlinedIcon,
    // ContactsOutlined as ContactsOutlinedIcon,
    // ReceiptOutlined as ReceiptOutlinedIcon,
    // PersonOutlined as PersonOutlinedIcon,
    // CalendarTodayOutlined as CalendarTodayOutlinedIcon,
    // HelpOutlineOutlined as HelpOutlineOutlinedIcon,
    // BarChartOutlined as BarChartOutlinedIcon,
    // PieChartOutlineOutlined as PieChartOutlineOutlinedIcon,
    // TimelineOutlined as TimelineOutlinedIcon,
    MenuOutlined as MenuOutlinedIcon
    // MapOutlined as MapOutlinedIcon
} from "@mui/icons-material";

type iItem = {
    title: string;
    to: any;
    icon: ReactNode;
    selected: string;
    setSelected: React.Dispatch<React.SetStateAction<string>>;
};

const Item = ({ title, to, selected, setSelected, icon }: iItem) => {
    // const theme = useTheme()
    // const colors = tokens(theme.palette.mode)
    console.log(to);

    return (
        <MenuItem
            style={
                {
                    // color: colors.grey![100],
                }
            }
            active={selected === title}
            icon={icon}
            onClick={() => setSelected(title)}
            routerLink={<Link to={to} />}>
            <Typography>{title}</Typography>
        </MenuItem>
    );
};

interface Props {}
const Sidebar: React.FC<Props> = () => {
    const { collapseSidebar, collapsed } = useProSidebar();
    // const theme = useTheme()
    // const colors = tokens(theme.palette.mode)
    const [selected, setSelected] = useState<string>("Dashboard");

    return (
        <Box
            sx={{
                "& .sidebar": {
                    height: "100%",
                    "& .sidebar-inner": {
                        // background: `${colors.primary![400]} !important`,
                    }
                },
                "& .menu-item.active": {
                    "& .menu-anchor": {
                        background: "transparent !important",
                        "& .menu-label": {
                            color: "#6870fa !important"
                        }
                    }
                },
                "& .menu-anchor:hover": {
                    background: "transparent !important",
                    "& .menu-label": {
                        color: "#868dfb !important"
                    }
                }
            }}>
            <ProSidebar>
                <Menu>
                    {/* LOGO AND MENU ICON */}
                    <MenuItem
                        onClick={() => collapseSidebar(!collapsed)}
                        icon={collapsed ? <MenuOutlinedIcon /> : undefined}>
                        {!collapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px">
                                <Typography variant="h3">ADMINIS</Typography>
                                <IconButton onClick={() => collapseSidebar()}>
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>
                    <Box>
                        <Item
                            title="Dashboard"
                            to="/"
                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography
                            variant="h6"
                            // color={colors.grey![300]}
                            sx={{ m: "15px 0 5px 20px" }}>
                            Data
                        </Typography>
                        <Item
                            title="Manage Team"
                            to="/team"
                            icon={<PeopleOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        {/* <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey![300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey![300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
};
export default Sidebar;
