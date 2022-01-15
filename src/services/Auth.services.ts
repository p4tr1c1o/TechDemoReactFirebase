import { Usuario } from "./../models/Usuario.model";
import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
import { Roles } from "../models/Roles.model";
import { doc, setDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { FirebaseError } from "firebase/app";

const usuariosRef = collection(db, "usuarios");
export const auth = getAuth();

async function registarUsuario(usuario: Usuario) {

    try {
        const credenciales = await createUserWithEmailAndPassword(auth, usuario.email, usuario.password);

        delete usuario.id;
        usuario.uid = credenciales.user.uid;
        usuario.roles = new Roles({ usuario: true });

        const userDoc = doc(usuariosRef, usuario.uid);
        return setDoc(userDoc, JSON.parse(JSON.stringify(usuario)), { merge: true });
    } catch (error) {
        if (error instanceof FirebaseError) {
            return { isError: true, errorCode: error.code };
        }
        return { isError: true, errorCode: error };
    }

}

function ingresar(email: string, password: string) {

    return signInWithEmailAndPassword(auth, email, password);
}


function cerrarSesion() {

    return signOut(auth);
}

const AuthService = {
    registarUsuario,
    ingresar,
    cerrarSesion,
};

export default AuthService;