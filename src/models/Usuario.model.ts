import { Roles } from "./Roles.model";


export default class Usuario {
    id?: string;

    uid: string;
    nombre: string;
    apellido: string;
    displayName: string;
    email: string;
    password: string;
    photoURL?: string;
    ultimoLogin?: string;
    usuarioEstado?: number;
    roles: Roles;

    public constructor(init?: Partial<Usuario>) {
        Object.assign(this, init);
    }
}
