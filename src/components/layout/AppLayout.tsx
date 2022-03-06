import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import appTheme from "../../AppTheme";
import Footer from "./Footer";
import DrawerHandler from "./DrawerHandler";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { padding } from "@mui/system";
import { CssBaseline } from "@mui/material";

export default function AppLayout() {
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
            flexDirection: "column",
        },
    } as const;

    return (
        <>
            <CssBaseline />
            <Box sx={styles.layout}>
                <DrawerHandler
                    isMdUp={isMdUp}
                    mobileOpen={mobileOpen}
                    handleDrawerToggle={handleDrawerToggle}
                />
                <Box sx={styles.mainWraper}>
                    <Header onDrawerToggle={handleDrawerToggle} />
                    <Outlet />
                    <Footer />
                </Box>
            </Box >
        </ >
    );
}
