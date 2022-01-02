export class Roles {
    usuario: boolean

    public constructor(init?: Partial<Roles>) {
        Object.assign(this, init);
    }
}

