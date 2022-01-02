import { Usuario } from "./../models/Usuario.model";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { Roles } from "../models/Roles.model";
import { doc, setDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const usuariosRef = collection(db, "usuarios");
export const auth = getAuth();

async function registarUsuario(usuario: Usuario) {

    try {
        const credenciales = await createUserWithEmailAndPassword(auth, usuario.email, usuario.password);
        usuario.uid = credenciales.user.uid;
        usuario.roles = new Roles({ usuario: true });

        const userDoc = doc(usuariosRef, usuario.uid);

        return setDoc(userDoc, { ...usuario }, { merge: true });

    } catch (error) {
        console.log(error);
    }
}

function ingresar(email: string, password: string) {

    return signInWithEmailAndPassword(auth, email, password);
}


function signOut() {

    return;
}

const AuthService = {
    registarUsuario,
    ingresar,
    signOut,

};

export default AuthService;