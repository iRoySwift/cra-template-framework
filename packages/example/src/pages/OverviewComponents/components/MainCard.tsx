import { Card, CardContent, CardHeader, Divider } from "@mui/material";
import React from "react";

interface Props {
    title?: string;
    children: React.ReactNode;
}
const MainCard: React.FC<Props> = ({ title, children }) => {
    return (
        <Card variant="outlined">
            <CardHeader title={title} titleTypographyProps={{ variant: "subtitle1" }} />
            <Divider />
            <CardContent>{children}</CardContent>
        </Card>
    );
};
export default MainCard;
