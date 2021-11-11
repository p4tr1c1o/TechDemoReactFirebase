import React from "react";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";


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
            <AppRoutes />
        </BrowserRouter>
    );
}

export default App;
