import { Box, CircularProgress } from "@mui/material";
import React from "react";

function AppCircularProgress() {
    return (
        <Box sx={{
            display: "flex",
            flexGrow: 1,
            alignItems: "center",
        }}>
            <CircularProgress size="80px" sx={{ margin: "auto" }} />
        </Box>);
}

export default AppCircularProgress;
