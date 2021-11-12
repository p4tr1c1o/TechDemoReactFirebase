import * as React from "react";
import { createStyles, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Navigator from "./Navigator";
import Content from "./Content";
import Header from "./Header";
import theme from "./AppTheme";
import AppFooter from "./AppFooter";
import AppDrawer2 from "./AppDrawer2";
import { Outlet } from "react-router-dom";

export default function Paperbase() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

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
        main: {
            flex: 1,
            paddingY: 6,
            paddingX: 4,
            backgroundColor: "#eaeff1",

        }
    } as const;

    return (
        <ThemeProvider theme={theme}>
            <Box sx={styles.layout}>
                <AppDrawer2
                    isMdUp={isMdUp}
                    mobileOpen={mobileOpen}
                    handleDrawerToggle={handleDrawerToggle}
                />
                <Box sx={styles.mainWraper}>
                    <Header onDrawerToggle={handleDrawerToggle} />
                    <Box component="main" sx={styles.main}>
                        <Outlet />
                    </Box>
                    <AppFooter />
                </Box>
            </Box >
        </ThemeProvider >
    );
}
