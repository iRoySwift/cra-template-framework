import { useAppSelector, useAppDispatch } from "@/hooks/store";
import { activeItem } from "@/store/reducer/menu";
import { ListItemButton, ListItemIcon, ListItemText, useTheme } from "@mui/material";
import React, { forwardRef } from "react";
import { Link } from "react-router-dom";

interface Props {
    item: any;
    level: number;
}
const NavItem: React.FC<Props> = ({ item, level }) => {
    const theme = useTheme();
    const dispatch = useAppDispatch();
    const menu = useAppSelector(state => state.menu);
    const { openItem } = menu;

    const handlerItem = id => {
        dispatch(activeItem({ openItem: [id] }));
    };

    const Icon = item.icon;
    const itemIcon = Icon ? <Icon style={{ fontSize: "1rem" }} /> : false;

    let itemTarget = "_self";
    if (item.target) {
        itemTarget = "_blank";
    }
    let listItemProps = {
        component: forwardRef<any>((props, ref) => (
            <Link
                ref={ref}
                {...props}
                to={item.url}
                target={itemTarget}
            />
        ))
    };

    const isSelected = openItem.findIndex(id => item.id === id) > -1;
    // const textColor = "text.primary";
    const iconSelectedColor = "primary.main";
    const bgColor = "primary.lighter";
    return (
        <ListItemButton
            {...listItemProps}
            selected={isSelected}
            onClick={() => handlerItem(item.id)}
            sx={{
                pl: `${level * 28}px`,
                py: 1,
                "&:hover": {
                    bgcolor: bgColor
                },
                "&.Mui-selected": {
                    borderRight: `2px solid ${theme.palette.primary.main}`,
                    bgcolor: bgColor,
                    color: iconSelectedColor
                }
            }}>
            {itemIcon && <ListItemIcon sx={{ minWidth: 28, color: iconSelectedColor }}>{itemIcon}</ListItemIcon>}

            <ListItemText primary={item.title} />
        </ListItemButton>
    );
};
export default NavItem;
