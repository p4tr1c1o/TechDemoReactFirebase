import { Box, CircularProgress } from "@mui/material";
import React from "react";

function AppCircularProgress() {
    return (
        <Box sx={{ display: "flex", height: "100%", justifyContent: "center", alignItems: "center" }}>
            <CircularProgress size="80px" />
        </Box>);
}

export default AppCircularProgress;
