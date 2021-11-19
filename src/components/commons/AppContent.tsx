import React from "react";
import { Paper } from "@mui/material";
import { Box } from "@mui/system";

function AppContent(props) {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            flexGrow: 1,
            padding: 6,
        }}>
            <Paper sx={{
                flexGrow: 1,
                marginBottom: "auto",
                maxWidth: 1200,
                minHeight: "419px"
            }}>
                {props.children}
            </Paper>
        </Box >
    );
}

export default AppContent;
