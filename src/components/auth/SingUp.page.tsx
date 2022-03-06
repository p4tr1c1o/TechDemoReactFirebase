import * as React from "react";
import * as yup from "yup";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import appTheme from "../../AppTheme";
import Usuario from "../../models/Usuario.model";
import { useFormik } from "formik";
import AuthService, { auth } from "../../services/Auth.services";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";


export default function SignUp() {
    const [mensaje, setMensaje] = useState("");
    const [currentUser, authLoading, authError] = useAuthState(auth);
    const navigate = useNavigate();

    const validacion = yup.object().shape({
        nombre: yup
            .string()
            .min(3, "El nombre debe tener almenos 3 letras")
            .required("Por favor ingrese un nombre"),
        apellido: yup
            .string()
            .min(3, "El apellido debe tener almenos 3 letras")
            .required("Por favor ingrese un apellido"),
        email: yup
            .string()
            .email()
            .required("Por favor ingrese un email"),
        password: yup
            .string()
            .min(8)
            .matches(/[a-zA-Z0-9]/, "Password can only contain Latin letters.")
    });

    useEffect(() => {
        if (authLoading) {
            // spinner
            return;
        }
        if (currentUser) {
            navigate("/", { replace: true });
        }
    }, [currentUser, authLoading]);

    const formik = useFormik({
        initialValues: new Usuario(),
        enableReinitialize: true,
        validationSchema: validacion,
        onSubmit: handleSubmit

    });

    async function handleSubmit() {
        const result = await AuthService.registarUsuario(new Usuario(formik.values));

        if (result?.esError) {
            switch (result.errorCode) {
                case "auth/email-already-in-use":
                    formik.errors.email = "El correo ya esta en uso. Elige otro.";
                    break;

                default:
                    setMensaje(result.errorCode as string);
                    break;
            }
        }
        return;
    }

    function Copyright(props: any) {
        return (
            <Typography variant="body2" color="text.secondary" align="center" {...props}>
                {"Copyright © "}
                <Link color="inherit" href="https://mui.com/">
                    Your Website
                </Link>{" "}
                {new Date().getFullYear()}
                {"."}
            </Typography>
        );
    }

    return (
        <ThemeProvider theme={appTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ margin: 1, bgcolor: "secondary.main" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Crear Cuenta
                    </Typography>
                    <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ marginTop: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="nombre"
                                    required
                                    fullWidth
                                    id="nombre"
                                    label="Nombre"
                                    autoFocus
                                    value={formik.values.nombre}
                                    onChange={formik.handleChange}
                                    error={formik.touched.nombre && Boolean(formik.errors.nombre)}
                                    helperText={formik.touched.nombre && formik.errors.nombre}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="apellido"
                                    label="Apellido"
                                    name="apellido"
                                    autoComplete="family-name"
                                    value={formik.values.apellido}
                                    onChange={formik.handleChange}
                                    error={formik.touched.apellido && Boolean(formik.errors.apellido)}
                                    helperText={formik.touched.apellido && formik.errors.apellido}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    name="email"
                                    autoComplete="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    helperText={formik.touched.password && formik.errors.password}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6" color="warning"> {mensaje}</Typography>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            disabled={formik.isSubmitting}
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Registrarme
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Ya tiene una cuenta? Ingrese aqui
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                {/* <Copyright sx={{ mt: 5 }} /> */}
            </Container>
        </ThemeProvider>
    );
}
