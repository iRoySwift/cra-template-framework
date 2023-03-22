declare namespace State {
    export interface App {
        appWidth: number;
        appHeight: number;
        language: "en" | "zh";
    }

    export interface AppPayload extends App {}

    export interface Components {
        mobileMenuVisible: boolean;
    }

    export interface AppState {
        app: App;
        components: Components;
    }
}

declare module "@mui/material/styles" {
    interface Theme {
        palette: iPalette;
    }
}
