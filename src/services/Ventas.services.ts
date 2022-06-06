import { db } from "../../firebase.config";
import { collection, orderBy, query, addDoc, updateDoc, deleteDoc, doc, getDocs } from "firebase/firestore";
import Venta from "../models/Venta.model";

const collectionRef = collection(db, "ventas");

function getAll() {
    return query(collectionRef, orderBy("nombre"));
}

function test() {
    return getDocs(collectionRef);
}

function create(data: Venta) {
    return addDoc(collectionRef, data);
}

function update(data: Venta) {
    if (data.id) {
        const docRef = doc(collectionRef, data?.id);
        return updateDoc(docRef, { ...data });
    }
}

function remove(id: string) {
    return deleteDoc(doc(collectionRef, id));
}

const VentasService = {
    getAll,
    create,
    update,
    remove
};

export default VentasService;