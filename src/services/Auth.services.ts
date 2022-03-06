import Usuario from "./../models/Usuario.model";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
import { Roles } from "../models/Roles.model";
import { doc, setDoc, collection, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { FirebaseError } from "firebase/app";

const usuariosRef = collection(db, "usuarios");
export const auth = getAuth();

async function obtenerUsuario(uid: string) {
    const docRef = doc(usuariosRef, uid);
    const userDoc = await getDoc(docRef);
    return new Usuario(userDoc.data());
}


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
            return { esError: true, errorCode: error.code };
        }
        return { esError: true, errorCode: error };
    }

}

async function ingresar(email: string, password: string) {
    try {
        await signInWithEmailAndPassword(auth, email, password);

    } catch (error) {
        return { esError: true, errorCode: error };
    }
}


async function cerrarSesion() {

    return await signOut(auth);
}

const AuthService = {
    obtenerUsuario,
    registarUsuario,
    ingresar,
    cerrarSesion,
};

export default AuthService;