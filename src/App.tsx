import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./AuthContext";
import AppRoutes from "./routes/AppRoutes";
import appTheme from "./AppTheme";

function App() {

    return (
        <ThemeProvider theme={appTheme}>
            <AuthProvider>
                <BrowserRouter>
                    <AppRoutes />
                </BrowserRouter>
            </AuthProvider>
        </ThemeProvider>
    );
}

export default App;
