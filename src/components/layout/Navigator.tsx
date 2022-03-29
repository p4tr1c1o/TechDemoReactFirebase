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
import { Link, useNavigate } from "react-router-dom";
import { Home, Settings, ArrowRight, KeyboardArrowDown } from "@mui/icons-material";
import { Tooltip, IconButton, Paper, } from "@mui/material";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";


const categories = [
    {
        nombreCategoria: "Build",
        paginas: [
            { titulo: "SignIn", icono: <PeopleIcon />, ruta: "signin-side" },
            { titulo: "SignUp", icono: <PeopleIcon />, ruta: "signup" },
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
        paddingy: "2px",
        paddingx: 3,
        color: "rgba(255, 255, 255, 0.7)",
        "&:hover, &:focus": {
            bgcolor: "rgba(255, 255, 255, 0.08)",
        },
    },
    itemCategory: {
        boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
        paddingy: 1.5,
        paddingx: 3,
    }
};

export default function Navigator({ ...props }: DrawerProps) {
    //TODO: renombrar variables y usar thema para stylos y colores
    const navigate = useNavigate();
    const [categoriasStates, setCategoriasStates] = React.useState<string[]>([categories[0].nombreCategoria]);


    const FireNav = styled(List)<{ component?: React.ElementType }>({
        "& .MuiListItemButton-root": {
            paddingLeft: 24,
            paddingRight: 24,
        },
        "& .MuiListItemIcon-root": {
            minWidth: 0,
            marginRight: 16,
        },
        "& .MuiSvgIcon-root": {
            fontSize: 20,
        },
    });

    function setCategoriaOpen(nombreCategoria: string) {
        const existe = categoriasStates.find(categoria => categoria == nombreCategoria);
        if (existe) {
            setCategoriasStates(categoriasStates.filter(categoria => categoria != nombreCategoria));
        } else {
            setCategoriasStates(categoriasStates.concat(nombreCategoria));
        }
    }

    function isCategoriaOpen(nombreCategoria: string) {

        if (nombreCategoria) {
            return categoriasStates.find(categoria => categoria == nombreCategoria);
        }
    }

    return (
        <Drawer variant="permanent" {...props}>
            <Box sx={{ display: "flex" }}>
                <ThemeProvider
                    theme={createTheme({
                        components: {
                            MuiListItemButton: {
                                defaultProps: {
                                    disableTouchRipple: true,
                                },
                            },
                        },
                        palette: {
                            mode: "dark",
                            primary: { main: "rgb(102, 157, 246)" },
                            background: { paper: "rgb(5, 30, 52)" },
                        },
                    })}
                >
                    <Paper elevation={0} sx={{ maxWidth: 256 }}>
                        <FireNav component="nav" disablePadding>
                            <ListItemButton component="a" href="/">
                                <ListItemIcon sx={{ fontSize: 20 }}>🔥</ListItemIcon>
                                <ListItemText
                                    sx={{ my: 0 }}
                                    primary="Tech Demo"
                                    primaryTypographyProps={{
                                        fontSize: 20,
                                        fontWeight: "medium",
                                        letterSpacing: 0,
                                    }}
                                />
                            </ListItemButton>
                            <Divider />
                            <ListItem component="div" disablePadding>
                                <ListItemButton sx={{ height: 56 }}>
                                    <ListItemIcon>
                                        <Home color="primary" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Project Overview"
                                        primaryTypographyProps={{
                                            color: "primary",
                                            fontWeight: "medium",
                                            variant: "body2",
                                        }}
                                    />
                                </ListItemButton>
                                <Tooltip title="Project Settings">
                                    <IconButton
                                        size="large"
                                        sx={{
                                            "& svg": {
                                                color: "rgba(255,255,255,0.8)",
                                                transition: "0.2s",
                                                transform: "translateX(0) rotate(0)",
                                            },
                                            "&:hover, &:focus": {
                                                bgcolor: "unset",
                                                "& svg:first-of-type": {
                                                    transform: "translateX(-4px) rotate(-20deg)",
                                                },
                                                "& svg:last-of-type": {
                                                    right: 0,
                                                    opacity: 1,
                                                },
                                            },
                                            "&:after": {
                                                content: "\"\"",
                                                position: "absolute",
                                                height: "80%",
                                                display: "block",
                                                left: 0,
                                                width: "1px",
                                                bgcolor: "divider",
                                            },
                                        }}
                                    >
                                        <Settings />
                                        <ArrowRight sx={{ position: "absolute", right: 4, opacity: 0 }} />
                                    </IconButton>
                                </Tooltip>
                            </ListItem>
                            <Divider />

                            {categories.map(({ nombreCategoria, paginas }) => (
                                <Box key={nombreCategoria}
                                    sx={{
                                        bgcolor: isCategoriaOpen(nombreCategoria) ? "rgba(71, 98, 130, 0.2)" : null,
                                        pb: isCategoriaOpen(nombreCategoria) ? 2 : 0,
                                    }}
                                >
                                    <ListItemButton
                                        alignItems="flex-start"
                                        onClick={() => setCategoriaOpen(nombreCategoria)}
                                        sx={{
                                            px: 3,
                                            pt: 2.5,
                                            pb: isCategoriaOpen(nombreCategoria) ? 0 : 2.5,
                                            "&:hover, &:focus": { "& svg": { opacity: isCategoriaOpen(nombreCategoria) ? 1 : 0 } },
                                        }}
                                    >
                                        <ListItemText
                                            primary={nombreCategoria}
                                            primaryTypographyProps={{
                                                fontSize: 15,
                                                fontWeight: "medium",
                                                lineHeight: "20px",
                                                mb: "2px",
                                            }}
                                            secondary="Authentication, Firestore Database, Realtime Database, Storage, Hosting, Functions, and Machine Learning"
                                            secondaryTypographyProps={{
                                                noWrap: true,
                                                fontSize: 12,
                                                lineHeight: "16px",
                                                color: isCategoriaOpen(nombreCategoria) ? "rgba(0,0,0,0)" : "rgba(255,255,255,0.5)",
                                            }}
                                            sx={{ my: 0 }}
                                        />
                                        <KeyboardArrowDown
                                            sx={{
                                                mr: -1,
                                                opacity: 0,
                                                transform: isCategoriaOpen(nombreCategoria) ? "rotate(-180deg)" : "rotate(0)",
                                                transition: "0.2s",
                                            }}
                                        />
                                    </ListItemButton>
                                    {isCategoriaOpen(nombreCategoria) &&
                                        paginas.map(({ titulo, icono, ruta }) => (
                                            <ListItemButton
                                                key={titulo}
                                                sx={{ paddingy: 0, minHeight: 32, color: "rgba(255,255,255,.8)" }}
                                                onClick={() => navigate(ruta ?? "")}
                                            >
                                                <ListItemIcon sx={{ color: "inherit" }}>
                                                    {icono}
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={titulo}
                                                    primaryTypographyProps={{ fontSize: 14, fontWeight: "medium" }}
                                                />
                                            </ListItemButton>
                                        ))
                                    }

                                </Box>))}
                        </FireNav>
                    </Paper>
                </ThemeProvider>
            </Box>
        </Drawer >
    );
}

