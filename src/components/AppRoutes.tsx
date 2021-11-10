import React from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import TiposComprobantesGestion from "./tipos-comprobantes/tipos-comprobantes-gestion";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />} >
                <Route path="tipos-comprobantes" element={<TiposComprobantesGestion />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;
