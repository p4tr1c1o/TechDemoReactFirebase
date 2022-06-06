import { db } from "../../firebase.config";
import { collection, orderBy, query, addDoc, updateDoc, deleteDoc, doc, getDocs } from "firebase/firestore";
import Producto from "../models/Producto.model";

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
        return updateDoc(docRef, { ...data });
    }
}

function remove(id: string) {
    return deleteDoc(doc(collectionRef, id));
}

const ProductosService = {
    getAll,
    create,
    update,
    remove
};

export default ProductosService;