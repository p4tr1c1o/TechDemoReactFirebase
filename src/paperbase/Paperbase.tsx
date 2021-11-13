import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import appTheme from "./AppTheme";
import AppFooter from "./AppFooter";
import AppDrawer2 from "./AppDrawer2";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Paperbase() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const isMdUp = useMediaQuery(appTheme.breakpoints.up("md"));

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const styles = {
        layout: {
            display: "flex",
            minHeight: "100vh",
        },
        mainWraper: {
            flex: 1,
            display: "flex",
            flexDirection: "column"
        },
    } as const;

    return (
        <ThemeProvider theme={appTheme}>
            <Box sx={styles.layout}>
                <AppDrawer2
                    isMdUp={isMdUp}
                    mobileOpen={mobileOpen}
                    handleDrawerToggle={handleDrawerToggle}
                />
                <Box sx={styles.mainWraper}>
                    <Header onDrawerToggle={handleDrawerToggle} />
                    <Outlet />
                    <AppFooter />
                </Box>
            </Box >
        </ThemeProvider >
    );
}
