import { AppBar, Toolbar, Grid, Button } from "@mui/material";
import React from "react";

interface Props {
    onClick: () => void
}

function AppGridHeader({ onClick }: Props) {
    return <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
    >
        <Toolbar>
            <Grid container spacing={2} justifyContent="flex-end">
                <Grid item>
                    <Button variant="contained" sx={{ mr: 1 }} onClick={onClick}>
                        + Nuevo
                    </Button>
                </Grid>
            </Grid>
        </Toolbar>
    </AppBar>;
}

export default AppGridHeader;