import { db } from "../firebase";
import { collection, orderBy, query, addDoc, updateDoc, doc, UpdateData } from "firebase/firestore";

export interface Producto {
    docId?: string,
    nombre: string,
    descripcion?: string,

}

const productosRef = collection(db, "productos");

function getAll() {
    return query(productosRef, orderBy("nombre"));
}

function create(data: Producto) {
    return addDoc(productosRef, data);
}

function update(data: Producto) {
    if (data.docId) {
        const ref = doc(db, "productos", data?.docId);
        return updateDoc(ref, data as UpdateData<Producto>);
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