import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
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