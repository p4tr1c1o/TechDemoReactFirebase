import { Grid, Toolbar, Typography } from "@mui/material";
import React from "react";

export interface Props {
    titulo: string
}

function AppToolbar({ titulo }: Props) {
    return (
        <Toolbar sx={{ backgroundColor: "primary.main" }}>
            <Grid container alignItems="center" spacing={1}>
                <Grid item xs>
                    <Typography color="white" variant="h5" component="h1">
                        {titulo}
                    </Typography>
                </Grid>
            </Grid>
        </Toolbar>);
}

export default AppToolbar;