import * as React from "react";
import { createContext, useState, useEffect } from "react";
import Usuario from "./models/Usuario.model";
import { onAuthStateChanged } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import AuthService, { auth } from "./services/Auth.services";


export const AuthContext = createContext<Usuario | null>(null);

function AuthProvider({ children }: { children: JSX.Element }) {
    // const [isLoading, setIsLoading] = useState(false);
    const [usuario, setUsuario] = useState<Usuario | null>(null);
    const [currentUser, authLoading, authError] = useAuthState(auth);

    useEffect(() => {
        // onAuthStateChanged(auth, async (currentUser) => {
        //     if (currentUser) {
        //         const usuario = await AuthService.obtenerUsuario(currentUser.uid);
        //         return setUsuario(usuario);
        //     }
        //     return null;
        // });
        if (authLoading) {
            // spiner
            return;
        }
        if (currentUser) {
            AuthService.obtenerUsuario(currentUser.uid).then(data =>
                setUsuario(data)
            );
        }
    }, [currentUser, authLoading]);

    return (
        <AuthContext.Provider value={usuario}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;


