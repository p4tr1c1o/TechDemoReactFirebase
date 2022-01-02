import React from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import TiposComprobantesGestion from "./components/tipos-comprobantes/TiposComprobantes.gestion";
import SignInSide from "./components/auth/SignInSide";
import SignUp from "./components/auth/SingUp";

function AppRoutes() {
    return (
        <Routes>
            <Route path="signin-side" element={<SignInSide />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="/" element={<AppLayout />} >
                <Route path="tipos-comprobantes" element={<TiposComprobantesGestion />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;
