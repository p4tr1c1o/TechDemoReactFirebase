import React from "react";
import Box from "@mui/material/Box";
import AppDrawer from "./AppDrawer";
import AppTopBar from "./AppTopBar";
import { Outlet } from "react-router-dom";
import { Container, CssBaseline } from "@mui/material";

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

                <Box sx={{
                    backgroundColor: "purple",
                    flexGrow: 1,
                    overflow: "auto",
                    marginTop: { xs: 7, sm: 8 },
                    height: { xs: "calc(100vh - 58px)", sm: "calc(100vh - 64px)" },
                }}>
                    <Container
                        sx={{
                            display: "flex",
                            backgroundColor: "violet",
                            maxWidth: "1200px",
                            paddingTop: { xs: 2, sm: 3 },
                        }}>
                        <Outlet />
                    </Container>
                </Box>

            </Box>
        </div >
    );
}
