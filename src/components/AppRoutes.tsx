import React from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import TiposComprobantesGestion from "./tipos-comprobantes/TiposComprobantesGestion";
import Pagina from "./Pagina";
import Paperbase from "../paperbase/Paperbase";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />} >
                <Route path="tipos-comprobantes" element={<TiposComprobantesGestion />} />
                <Route path="pagina" element={<Pagina />} />
            </Route>
            <Route path="/paperbase" element={<Paperbase />} >
                <Route path="tipos-comprobantes" element={<TiposComprobantesGestion />} />
                <Route path="pagina" element={<Pagina />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;
