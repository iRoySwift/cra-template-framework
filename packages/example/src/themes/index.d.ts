import { Breakpoints } from "@mui/material";
import { iPalette } from ".";

declare module "@mui/material/styles" {
    interface Theme {
        customShadows: any;
        breakpoints: Breakpoints;
        palette: iPalette;
    }
}
