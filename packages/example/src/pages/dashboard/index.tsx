import { Button } from "@mui/material";
import React from "react";

interface Props {}
const DashBoard: React.FC<Props> = () => {
    return (
        <div>
            <Button variant="contained">Primary</Button>
            <Button
                variant="contained"
                color="secondary">
                Secondary
            </Button>
            <Button
                variant="contained"
                color="info">
                Info
            </Button>
            <Button
                variant="contained"
                color="success">
                Success
            </Button>
            <Button
                variant="contained"
                color="warning">
                Warning
            </Button>
            <Button
                variant="contained"
                color="error">
                Error
            </Button>
        </div>
    );
};
export default DashBoard;
