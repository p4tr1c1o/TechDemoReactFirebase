import { db } from "../firebase";
import { collection, orderBy, query, addDoc, updateDoc, doc, UpdateData, getDocs } from "firebase/firestore";

export class Producto {
    id?: string;
    nombre: string;
    descripcion?: string;

    constructor(init?: Partial<Producto>) {
        Object.assign(this, init);
    }
}

const collectionRef = collection(db, "productos");

function getAll() {
    return query(collectionRef, orderBy("nombre"));
}

function test() {


    return getDocs(collectionRef);
}

function create(data: Producto) {
    return addDoc(collectionRef, data);
}

function update(data: Producto) {
    if (data.id) {
        const docRef = doc(collectionRef, data?.id);
        return updateDoc(docRef, data as UpdateData<Producto>);
    }
}

// const delete = (id) => {
//     return db.doc(id).delete();
// };

const ProductosService = {
    getAll,
    create,
    update,
    // remove
};

export default ProductosService;