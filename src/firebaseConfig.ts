// Configuración de Firebase para Next.js
import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
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
