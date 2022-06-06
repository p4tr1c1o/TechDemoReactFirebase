import React, { useState } from "react";
import * as yup from "yup";
import { ThemeProvider } from "@emotion/react";
import { Container, CssBaseline, Box, Avatar, Typography, Grid, TextField, Button, Stack } from "@mui/material";
import Link from "@mui/material/Link";
import appTheme from "../../AppTheme";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useFormik } from "formik";
import AuthService from "../../services/Auth.services";



export default function OlvidoPassword() {
    const [mensaje, setMensaje] = useState("");

    const validacion = yup.object().shape({
        email: yup
            .string()
            .email()
            .required("Por favor ingrese un email")
    });

    const formik = useFormik({
        initialValues: { email: "" },
        onSubmit: handleSubmit,
        validationSchema: validacion
    });

    async function handleSubmit(values) {
        console.log(values);

        const result = await AuthService.blanquearContraseña(values.email);
        if (result?.esError) {
            return console.log(result.errorCode);
        }
        setMensaje("Se ha enviado un correo para restablecer la contraseña");

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
                        Olvido su password
                    </Typography>
                    <Typography component="div" variant="subtitle1">
                        Por favor ingrese su email para que podamos enviarle una nueva contraseña.
                    </Typography>
                    <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ marginTop: 3 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    name="email"
                                    sx={{ width: 396 }}
                                    autoComplete="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="subtitle2" color="error"> {mensaje}</Typography>
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
                                <Link href="signin-side" variant="body2">
                                    Volver
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
