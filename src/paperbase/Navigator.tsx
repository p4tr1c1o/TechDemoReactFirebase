import * as React from "react";
import Divider from "@mui/material/Divider";
import Drawer, { DrawerProps } from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import DnsRoundedIcon from "@mui/icons-material/DnsRounded";
import PermMediaOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActual";
import PublicIcon from "@mui/icons-material/Public";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";
import TimerIcon from "@mui/icons-material/Timer";
import SettingsIcon from "@mui/icons-material/Settings";
import PhonelinkSetupIcon from "@mui/icons-material/PhonelinkSetup";
import { Link } from "react-router-dom";


const categories = [
    {
        nombreCategoria: "Build",
        paginas: [
            { titulo: "Authentication", icono: <PeopleIcon />, activo: true },
            { titulo: "Pagina", icono: <DnsRoundedIcon />, ruta: "pagina" },
            { titulo: "Tipos Comprobantes", icono: <PermMediaOutlinedIcon />, ruta: "tipos-comprobantes" },
            { titulo: "Hosting", icono: <PublicIcon /> },
            { titulo: "Functions", icono: <SettingsEthernetIcon /> },
            { titulo: "Machine learning", icono: <SettingsInputComponentIcon /> },
        ],
    },
    {
        nombreCategoria: "Quality",
        paginas: [
            { titulo: "Analytics", icono: <SettingsIcon /> },
            { titulo: "Performance", icono: <TimerIcon /> },
            { titulo: "Test Lab", icono: <PhonelinkSetupIcon /> },
        ],
    },
];

const styles = {
    item: {
        py: "2px",
        px: 3,
        color: "rgba(255, 255, 255, 0.7)",
        "&:hover, &:focus": {
            bgcolor: "rgba(255, 255, 255, 0.08)",
        },
    },
    itemCategory: {
        boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
        py: 1.5,
        px: 3,
    }
};

export default function Navigator({ ...props }: DrawerProps) {
    //TODO: renombrar variables y usar thema para stylos y colores

    return (
        <Drawer variant="permanent" {...props}>
            <List disablePadding>
                <ListItem sx={{ ...styles.item, ...styles.itemCategory, fontSize: 22, color: "#fff" }}>
                    Paperbase
                </ListItem>
                <ListItem sx={{ ...styles.item, ...styles.itemCategory }}>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText>Project Overview</ListItemText>
                </ListItem>
                {categories.map(({ nombreCategoria, paginas }) => (
                    <Box key={nombreCategoria} sx={{ bgcolor: "#101F33" }}>
                        <ListItem sx={{ py: 2, px: 3 }}>
                            <ListItemText sx={{ color: "#fff" }}>{nombreCategoria}</ListItemText>
                        </ListItem>
                        {paginas.map(({ titulo, icono, activo, ruta }) => (
                            <ListItem disablePadding key={titulo}>
                                <ListItemButton selected={activo} sx={styles.item}>
                                    <ListItemIcon>{icono}</ListItemIcon>
                                    {ruta
                                        ? <Link to={ruta}>{titulo}</Link>
                                        : <ListItemText>{titulo}</ListItemText>
                                    }
                                </ListItemButton>
                            </ListItem>
                        ))}
                        <Divider sx={{ mt: 2 }} />
                    </Box>
                ))}
            </List>
        </Drawer>
    );
}
