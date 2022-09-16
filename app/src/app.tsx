import { createTheme, ThemeProvider } from "@mui/material";
import PlantGrid from "./views/PlantGrid";

import './style/global.css';
import Modal from "./components/generic/Modal";

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
                <Modal buttonText="Learn More"></Modal>
                {/* <PlantGrid></PlantGrid> */}
            </div>
        </ThemeProvider>
    );
}

export default App;