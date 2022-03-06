import React from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import TiposComprobantesPage from "./components/tipos-comprobantes/TiposComprobantes.page";
import SignInSide from "./components/auth/SignInSide.page";
import SignUp from "./components/auth/SingUp.page";
import RequireAuth from "./RequireAuth";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />} >
                <Route path="tipos-comprobantes" element={
                    <RequireAuth>
                        <TiposComprobantesPage />
                    </RequireAuth>
                } />
            </Route>
            <Route path="signin-side" element={<SignInSide />} />
            <Route path="signup" element={<SignUp />} />
        </Routes>
    );
}

export default AppRoutes;
