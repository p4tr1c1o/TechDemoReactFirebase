export default class Producto {
    id?: string;
    nombre: string;
    descripcion?: string;

    constructor(init?: Partial<Producto>) {
        Object.assign(this, init);
    }
}
