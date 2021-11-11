import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface Props {
    drawerWidth: number,
    handleDrawerToggle: () => void
}

function AppTopBar({ handleDrawerToggle, drawerWidth }: Props) {
    return (
        <AppBar
            position="fixed"
            sx={{
                display: "flex",
                ml: { sm: `${drawerWidth}px` },
                zIndex: (theme) => theme.zIndex.drawer + 1
            }}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: "none" } }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    Responsive drawer
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default AppTopBar;
