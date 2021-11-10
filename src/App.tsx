import React from 'react';
import './App.css';

import { getFirestore } from "firebase/firestore";
import { initializeApp } from 'firebase/app';
import AppLayout from "./components/layout/AppLayout";
import TiposComprobantesGestion from "./components/tipos-comprobantes/tipos-comprobantes-gestion";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";


export const app = initializeApp({
    apiKey: "AIzaSyDYIce0ZYlci3-YxoRVYvLvsV_cZAhPi-w",
    authDomain: "moxtechdemo.firebaseapp.com",
    projectId: "moxtechdemo",
    storageBucket: "moxtechdemo.appspot.com",
    messagingSenderId: "570447261301",
    appId: "1:570447261301:web:7748f3a560f5c4b603523c",
    measurementId: "G-SFFVF09TKZ"
});
export const db = getFirestore(app);

function App() {
    return (
        <BrowserRouter>
            <CssBaseline />
            <Routes>
                <Route path="/" element={<AppLayout />} >


                    <Route path="tipos-comprobantes" element={<TiposComprobantesGestion />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
