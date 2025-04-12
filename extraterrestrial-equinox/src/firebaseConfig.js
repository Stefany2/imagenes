// src/firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDcvUpMZlIfGMO0rfOmPFYyNSQICV8oFkI",
  authDomain: "shopping-b9b71.firebaseapp.com",
  projectId: "shopping-b9b71",
  storageBucket: "shopping-b9b71.firebasestorage.app",
  messagingSenderId: "827308561516",
  appId: "1:827308561516:web:007f52ff201d00a4b63449"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
const db = getFirestore(app);

export { db };
