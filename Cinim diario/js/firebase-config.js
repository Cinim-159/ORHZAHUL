// Firebase v9 modular
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA88l-FiTqTonLRuKB1It_xTDBVq5QH9yc",
  authDomain: "diario-cinim.firebaseapp.com",
  databaseURL: "https://diario-cinim-default-rtdb.firebaseio.com",
  projectId: "diario-cinim",
  storageBucket: "diario-cinim.firebasestorage.app",
  messagingSenderId: "703000537518",
  appId: "1:703000537518:web:7f3de79d4eac33873c803f",
  measurementId: "G-2C8KG8NW7Z"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export { database };
