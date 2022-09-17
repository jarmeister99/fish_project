import { createTheme, ThemeProvider } from "@mui/material";

import './style/global.css';
import Modal from "./components/generic/Modal";
import { FishSelector } from "./components/FishSelector";

const theme = createTheme({
    typography: {
        fontFamily: [
            'Roboto',
        ].join(','),
    }
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <div id="app">
                <FishSelector></FishSelector>
            </div>
        </ThemeProvider>
    );
}

export default App;