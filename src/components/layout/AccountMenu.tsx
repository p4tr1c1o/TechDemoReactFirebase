import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { PopoverProps } from "@mui/material";
import AuthService from "../../services/Auth.services";
import { useNavigate } from "react-router-dom";

interface AccountMenuProps {
    anchorEl?: PopoverProps["anchorEl"],
    open: boolean,
    handleClose: any
}

export default function AccountMenu({ anchorEl, open, handleClose }: AccountMenuProps) {
    const navigate = useNavigate();


    function handleLogOut() {
        AuthService.cerrarSesion();
        navigate("/signin-side");
    }


    return (
        <Menu
            id="positioned-menu"
            aria-labelledby="positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            anchorOrigin={{
                vertical: "top",
                horizontal: "left",
            }}
            transformOrigin={{
                vertical: "top",
                horizontal: "left",
            }}
        >
            <MenuItem onClick={handleClose}>Perfil</MenuItem>
            <MenuItem onClick={handleClose}>Acerca de</MenuItem>
            <MenuItem onClick={handleLogOut}>Cerrar sesion</MenuItem>
        </Menu>
    );
}