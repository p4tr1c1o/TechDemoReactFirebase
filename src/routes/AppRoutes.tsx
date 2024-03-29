import React from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import SignInSide from "../pages/auth/SignInSide.page";
import SignUp from "../pages/auth/SingUp.page";
import RequireAuth from "./RequireAuth";
import TiposComprobantesPage from "../pages/tipos-comprobantes/TiposComprobantes.page";
import Pagina from "../pages/Pagina";
import VentaForm from "../pages/ventas/Venta.form";
import OlvidoPassword from "../pages/auth/OlvidoPassword.page";


function AppRoutes() {
    return (
        <Routes>
            <Route path="signin-side" element={<SignInSide />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="olvido-password" element={<OlvidoPassword />} />

            <Route path="/" element={<AppLayout />} >
                <Route element={<RequireAuth />} >
                    <Route index element={<Pagina />} />
                    <Route path="tipos-comprobantes" element={<TiposComprobantesPage />} />
                    <Route path="venta" element={<VentaForm />} />
                </Route>
            </Route>

        </Routes >
    );
}

export default AppRoutes;
