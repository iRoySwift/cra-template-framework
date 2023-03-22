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
    };
};

// type keys = ReturnType<typeof Palette>;
// // type properties = keys;

// // export interface iPalette extends PaletteOptions {
// //     // [k in options]: any;
// // }
// export type iPalette = {
//     [k in keyof keys]: {
//         [t in keyof keys[k]]: string;
//     };
//     // [l in keyof  PaletteOptions]: {
//     //     [m in keyof PaletteOptions[l]]: string;
//     // };
// } & PaletteOptions;
export default Palette;
