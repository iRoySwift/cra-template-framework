// material-ui
import { createTheme } from "@mui/material/styles";

// colors
import { colors } from "@mui/material";

// project import
import ThemeOption from "./theme";

// ==============================|| DEFAULT THEME - PALETTE  ||============================== //

const Palette = mode => {
    const paletteColor = ThemeOption(colors);
    console.log(paletteColor, "paletteColor");

    return createTheme({
        palette: {
            mode,
            common: {
                black: "#000",
                white: "#fff"
            },
            ...paletteColor,
            text: {
                primary: paletteColor.grey[700],
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
        }
    });
};

export default Palette;
