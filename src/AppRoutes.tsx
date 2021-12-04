import React from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import TiposComprobantesGestion from "./components/tipos-comprobantes/TiposComprobantesGestion";

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
