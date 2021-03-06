import React from 'react';
import LoginProvider from "./providers/LoginProvider";
import Application from './Application';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#FF2424',
        },
        secondary: {
            main: '#FF2424',
        },
    },
});

export default function App(props) {
    return (
        <ThemeProvider theme={theme}>
            <LoginProvider>
                <Application />
            </LoginProvider>
        </ThemeProvider>
    );
}