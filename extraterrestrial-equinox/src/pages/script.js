// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyDcvUpMZlIfGMO0rfOmPFYyNSQICV8oFkI",
    authDomain: "shopping-b9b71.firebaseapp.com",
    projectId: "shopping-b9b71",
    storageBucket: "shopping-b9b71.appspot.com", // corregido .app a .com
    messagingSenderId: "827308561516",
    appId: "1:827308561516:web:007f52ff201d00a4b63449",
    databaseURL: "https://shopping-b9b71-default-rtdb.firebaseio.com" // Añadido para db realtime
  };
  
  // Inicializar Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Referencias
  const auth = firebase.auth();
  const db = firebase.database();
  
  // Cambiar entre formularios
  const container = document.getElementById('container');
  document.getElementById('signUp').addEventListener('click', () => {
    container.classList.add("right-panel-active");
  });
  document.getElementById('signIn').addEventListener('click', () => {
    container.classList.remove("right-panel-active");
  });
  
  // Registro de usuario
  document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
  
    const name = document.getElementById('registerName').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const password = document.getElementById('registerPassword').value;
  
    if (!name || !email || !password) {
      alert("Por favor, completa todos los campos.");
      return;
    }
  
    auth.createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        // Guardar solo datos no sensibles
        return db.ref('usuarios/' + cred.user.uid).set({
          nombres: name,
          email: email
        });
      })
      .then(() => {
        alert("¡Registro exitoso!");
        document.getElementById('registerForm').reset();
        container.classList.remove("right-panel-active"); // Ir al login
      })
      .catch((error) => {
        alert("Error en el registro: " + error.message);
      });
  });
  
  // Inicio de sesión
  document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
  
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
  
    auth.signInWithEmailAndPassword(email, password)
      .then((cred) => {
        alert("¡Bienvenido " + (cred.user.email || "") + "!");
        document.getElementById('loginForm').reset();
        // Redireccionar o cambiar vista aquí si deseas
      })
      .catch((error) => {
        alert("Error al iniciar sesión: " + error.message);
      });
  });
  