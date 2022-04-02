export default class Venta {
    id?: string;
    nombre: string;
    descripcion?: string;

    constructor(init?: Partial<Venta>) {
        Object.assign(this, init);
    }
}
