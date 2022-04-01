import * as React from "react";
import * as yup from "yup";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import appTheme from "../../AppTheme";
import { useFormik } from "formik";
import AuthService, { auth } from "../../services/Auth.services";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";

interface StateType {
    from: { pathname: string }
}

function Copyright(props) {
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

export default function SignInSide() {
    const navigate = useNavigate();
    const location = useLocation();
    const from = (location.state as StateType)?.from?.pathname || "/";
    const [currentUser, authLoading, authError] = useAuthState(auth);

    const validacion = yup.object().shape({
        email: yup
            .string()
            .email()
            .required("Por favor ingrese un email"),
        password: yup
            .string()
            .min(8)
            .matches(/[a-zA-Z0-9]/, "Password can only contain Latin letters.")
    });

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: handleSubmit,
        enableReinitialize: true,
        validationSchema: validacion,
    });

    useEffect(() => {
        if (authLoading) {
            // spinner
            return;
        }
        if (currentUser) {
            navigate(from, { replace: true });
        }
    }, [currentUser, authLoading]);


    async function handleSubmit() {
        const result = await AuthService.ingresar(formik.values.email, formik.values.password);
        if (result?.esError) {
            return console.log(result.errorCode);
        }
        navigate(from, { replace: true });
    }

    return (
        <ThemeProvider theme={appTheme}>
            <Grid container component="main" sx={{ height: "100vh" }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: "url(https://source.unsplash.com/random)",
                        backgroundRepeat: "no-repeat",
                        backgroundColor: (theme) =>
                            theme.palette.mode === "light" ? theme.palette.grey[50] : theme.palette.grey[900],
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Acceder
                        </Typography>
                        <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Recuerdame"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                disabled={formik.isSubmitting}
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Acceder
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Olvido su password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="signup" variant="body2">
                                        {"Aun no tiene cuenta? Crear cuenta"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
