import Routes from "@/routes/index";
import withProviders from "./store/providers";
// import { useInitApp } from './hooks';
import ThemeCustomization from "./themes";

const App = withProviders(() => {
    // useInitApp();
    return (
        <ThemeCustomization>
            <Routes />
        </ThemeCustomization>
    );
});

export default App;
