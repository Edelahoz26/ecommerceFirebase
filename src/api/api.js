import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";


// Leer los usuarios
export const getUser = async () => {
    const colRef = collection(db, 'users');
    const result = await getDocs(query(colRef));
    return getArrayFromCollection(result);
};

//Leer usuario por su ID
export const getUserById = async (uid) => {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
};

// Convertir a array de objetos
const getArrayFromCollection = (collection) => {
    return collection.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
    });
};