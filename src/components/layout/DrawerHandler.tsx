import React from "react";
import { Box } from "@mui/material";
import Navigator from "./Navigator";

interface Props {
    isMdUp: boolean,
    mobileOpen: boolean,
    handleDrawerToggle: () => void
}

function DrawerHandler({ isMdUp, mobileOpen, handleDrawerToggle }: Props) {
    const drawerWidth = 262;

    return (
        <Box
            component="nav"
            sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        >
            {isMdUp ? null : (
                <Navigator
                    PaperProps={{ style: { width: drawerWidth } }}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                />
            )}
            <Navigator
                PaperProps={{ style: { width: drawerWidth } }}
                sx={{ display: { md: "block", xs: "none" } }}
            />
        </Box>
    );
}

export default DrawerHandler;
