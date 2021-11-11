import React from "react";
import Box from "@mui/material/Box";
import AppDrawer from "./AppDrawer";
import AppTopBar from "./AppTopBar";
import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";

const drawerWidth = 240;

export default function AppLayout() {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <div>
            <Box sx={{ display: "flex", backgroundColor: "red" }}>
                <CssBaseline />
                <AppTopBar
                    drawerWidth={drawerWidth}
                    handleDrawerToggle={handleDrawerToggle}
                />
                <AppDrawer
                    drawerWidth={drawerWidth}
                    handleDrawerToggle={handleDrawerToggle}
                    mobileOpen={mobileOpen}
                />

                <Box
                    component="main"
                    sx={{
                        display: "flex",
                        backgroundColor: "violet",
                        flexGrow: 1,
                        height: "100vh",
                        overflow: "auto",
                        mt: { xs: 6, sm: 8 }
                    }}>
                    <Outlet />
                </Box>

            </Box>
        </div>
    );
}
