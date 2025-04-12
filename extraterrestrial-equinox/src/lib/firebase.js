// Importamos las funciones necesarias de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDcvUpMZlIfGMO0rfOmPFYyNSQICV8oFkI",
  authDomain: "shopping-b9b71.firebaseapp.com",
  projectId: "shopping-b9b71",
  storageBucket: "shopping-b9b71.firebasestorage.app",
  messagingSenderId: "827308561516",
  appId: "1:827308561516:web:007f52ff201d00a4b63449"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializamos Firestore y Storage
const db = getFirestore(app);
const storage = getStorage(app);

// Función para obtener los productos desde Firestore
export const getProducts = async () => {
  const productsCol = collection(db, "productos"); // Suponiendo que tu colección de productos se llama 'productos'
  const productSnapshot = await getDocs(productsCol);
  const productList = productSnapshot.docs.map(doc => doc.data());
  return productList;
};

// Función para agregar un nuevo producto a Firestore
export const addProduct = async (product) => {
  try {
    const docRef = await addDoc(collection(db, "productos"), product);
    console.log("Producto agregado con ID:", docRef.id);
  } catch (e) {
    console.error("Error al agregar el producto: ", e);
  }
};

// Función para subir imágenes a Firebase Storage
export const uploadImage = async (file) => {
  const storageRef = ref(storage, 'images/' + file.name); // Almacenamos la imagen en la carpeta 'images'
  
  try {
    // Subimos el archivo
    await uploadBytes(storageRef, file);
    // Obtenemos la URL de la imagen subida
    const downloadURL = await getDownloadURL(storageRef);
    console.log('Imagen subida con éxito. URL:', downloadURL);
    return downloadURL;  // Retornamos la URL de la imagen subida
  } catch (e) {
    console.error('Error al subir la imagen:', e);
  }
};
