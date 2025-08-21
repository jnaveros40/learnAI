// Configuración de Firebase para Next.js
import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBl6SYjXQrkBDpvmv04vaS2Zdx82KCZhM0",
  authDomain: "learnai-5da33.firebaseapp.com",
  projectId: "learnai-5da33",
  storageBucket: "learnai-5da33.firebasestorage.app",
  messagingSenderId: "936613703151",
  appId: "1:936613703151:web:42569190009483a4795a1a",
};



// Verificar que todas las variables estén presentes
const requiredEnvVars = ['apiKey', 'authDomain', 'projectId', 'storageBucket', 'messagingSenderId', 'appId'];
const missingVars = requiredEnvVars.filter(key => !firebaseConfig[key as keyof typeof firebaseConfig]);

if (missingVars.length > 0) {
  console.error('Missing Firebase configuration variables:', missingVars);
}

// Solo inicializar Firebase en el lado del cliente
let app: FirebaseApp | undefined;
let auth: Auth | undefined;

if (typeof window !== 'undefined' && missingVars.length === 0) {
  try {
    app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
    auth = getAuth(app);
  } catch (error) {
    console.error('Error initializing Firebase:', error);
  }
}

export { auth };
