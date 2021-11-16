import { createTheme } from "@mui/material/styles";


declare module "@mui/material/styles" {
    interface Theme {
        main: {

        };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        main?: {

        };
    }
}

let appTheme = createTheme({
    palette: {
        primary: {
            light: "#63ccff",
            main: "#009be5",
            dark: "#006db3",
        },
    },
    typography: {
        h5: {
            fontWeight: 500,
            fontSize: 26,
            letterSpacing: 0.5,
        },
    },
    shape: {
        borderRadius: 8,
    },
    components: {
        MuiTab: {
            defaultProps: {
                disableRipple: true,
            },
        },
    },
    mixins: {
        toolbar: {
            minHeight: 48,
        },
    },
    main: {
        display: "flex",
        flex: 1,
        paddingY: 4,
        paddingX: 4,
        backgroundColor: "#eaeff1",
        justifyContent: "center"

    },
});

appTheme = {
    ...appTheme,
    components: {
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: "#081627",
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                },
                contained: {
                    boxShadow: "none",
                    "&:active": {
                        boxShadow: "none",
                    },
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                root: {
                    marginLeft: appTheme.spacing(1),
                },
                indicator: {
                    height: 3,
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3,
                    backgroundColor: appTheme.palette.common.white,
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    margin: "0 16px",
                    minWidth: 0,
                    padding: 0,
                    [appTheme.breakpoints.up("md")]: {
                        padding: 0,
                        minWidth: 0,
                    },
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    padding: appTheme.spacing(1),
                },
            },
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    borderRadius: 4,
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    backgroundColor: "rgb(255,255,255,0.15)",
                },
            },
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    "&.Mui-selected": {
                        color: "#4fc3f7",
                    },
                },
            },
        },
        MuiListItemText: {
            styleOverrides: {
                primary: {
                    fontSize: 14,
                    fontWeight: appTheme.typography.fontWeightMedium,
                },
            },
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: "inherit",
                    minWidth: "auto",
                    marginRight: appTheme.spacing(2),
                    "& svg": {
                        fontSize: 20,
                    },
                },
            },
        },
        MuiAvatar: {
            styleOverrides: {
                root: {
                    width: 32,
                    height: 32,
                },
            },
        },
    },
};

export default appTheme;

