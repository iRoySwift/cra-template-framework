// material-ui
import { colors } from "@mui/material";

// project import
import ThemeOption from "./theme";

// ==============================|| DEFAULT THEME - PALETTE  ||============================== //
const Palette = mode => {
    const paletteColor = ThemeOption(colors);

    return {
        mode,
        common: {
            black: "#000",
            white: "#fff"
        },
        ...paletteColor,
        text: {
            primary: paletteColor.grey[900],
            secondary: paletteColor.grey[500],
            disabled: paletteColor.grey[400]
        },
        action: {
            disabled: paletteColor.grey[300]
        },
        divider: paletteColor.grey[200],
        background: {
            paper: paletteColor.grey[50],
            default: paletteColor.grey.A100
        }
    };
};

export default Palette;
