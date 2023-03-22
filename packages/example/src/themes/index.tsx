import { createTheme, CssBaseline, StyledEngineProvider, ThemeProvider, ThemeOptions as MuiThemeOptions, PaletteOptions, PaletteColorOptions } from "@mui/material";
import { useMemo } from "react";
import { Spacing } from "@mui/system";

// project import
import Palette from "./palette";
import CustomShadows from "./shadows";
import Typography from "./typography";
import componentsOverride from "./overrides/index";

export type CustomPaletteColorOptions = PaletteColorOptions & {
    lighter?: string;
};
interface iPalette extends PaletteOptions {
    primary?: CustomPaletteColorOptions;
}
export interface ThemeOptions extends MuiThemeOptions {
    customShadows?: any;
    spacing?: Spacing;
    palette?: iPalette;
}

const ThemeCustomization = ({ children }) => {
    const palette = Palette("light");
    const themeTypography = Typography(`'Public Sans', sans-serif`);
    const themeCustomShadows = useMemo(() => CustomShadows(palette), [palette]);

    const themeOptions: ThemeOptions = useMemo(
        () => ({
            breakpoints: {
                values: {
                    xs: 0,
                    sm: 768,
                    md: 1024,
                    lg: 1266,
                    xl: 1536
                }
            },
            direction: "ltr",
            mixins: {
                toolbar: {
                    minHeight: 60,
                    paddingTop: 8,
                    paddingBottom: 8
                }
            },
            palette,
            customShadows: themeCustomShadows,
            typography: themeTypography
        }),
        [palette, themeTypography, themeCustomShadows]
    );

    const themes = createTheme(themeOptions);
    themes.components = componentsOverride(themes);

    console.log(themes, "--0");

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export default ThemeCustomization;
