import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountMenu from "./AccountMenu";
import { useState, useContext } from "react";
import { Toolbar, Tooltip } from "@mui/material";
import { auth } from "../../services/Auth.services";
import { AuthContext } from "../../AuthContext";


const lightColor = "rgba(255, 255, 255, 0.7)";

interface HeaderProps {
    onDrawerToggle: () => void;
}

export default function Header({ onDrawerToggle }: HeaderProps) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>();
    const openAccountMenu = Boolean(anchorEl);
    const usuarioActual = useContext(AuthContext);

    function handleAccountMenuClick(event: React.MouseEvent<HTMLElement>) {
        setAnchorEl(event.currentTarget);
    }

    function handleCloseAccountMenu() {
        setAnchorEl(null);
    }

    return (
        <>
            <AppBar color="primary" position="sticky" elevation={0}>
                <Toolbar>
                    <Grid container spacing={1} alignItems="center">
                        <Grid sx={{ display: { md: "none", sm: "block" } }} item>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={onDrawerToggle}
                                edge="start"
                            >
                                <MenuIcon />
                            </IconButton>
                        </Grid>
                        <Grid item xs />
                        <Grid item>
                            <Link
                                href="/"
                                variant="body2"
                                sx={{
                                    textDecoration: "none",
                                    color: lightColor,
                                    "&:hover": {
                                        color: "common.white",
                                    },
                                }}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Go to docs {usuarioActual?.apellido}
                            </Link>
                        </Grid>
                        <Grid item>
                            <Tooltip title="Alerts • No alerts">
                                <IconButton color="inherit">
                                    <NotificationsIcon />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                        <Grid item>
                            <IconButton color="inherit" sx={{ p: 0.5 }} onClick={handleAccountMenuClick} >
                                <Avatar>{usuarioActual?.nombre.charAt(0)}</Avatar>
                            </IconButton>
                            <AccountMenu open={openAccountMenu} anchorEl={anchorEl} handleClose={handleCloseAccountMenu} />
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </ >
    );
}
