"use client";

import React, { useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseConfig";

const LoginPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined' && auth) {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // Si ya está autenticado, redirigir al dashboard
          window.location.href = "/dashboard";
        } else {
          setLoading(false);
        }
      });

      return () => unsubscribe();
    } else {
      setLoading(false);
    }
  }, []);

  const handleGoogleLogin = async () => {
    if (!auth) {
      alert("Firebase no está configurado correctamente. Verifica las variables de entorno.");
      return;
    }
    
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Usuario logueado:", result.user);
      // La redirección se manejará automáticamente por onAuthStateChanged
    } catch (error: any) {
      console.error("Error al iniciar sesión:", error);
      if (error.code === 'auth/invalid-api-key') {
        alert("Error de configuración: API Key de Firebase inválida");
      } else if (error.code === 'auth/popup-closed-by-user') {
        alert("Inicio de sesión cancelado por el usuario");
      } else {
        alert(`Error al iniciar sesión: ${error.message}`);
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Cargando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Bienvenido a LearnAI
          </h1>
          <p className="text-gray-600 mb-8">
            Inicia sesión para acceder a tu plataforma de aprendizaje
          </p>
          
          {!auth ? (
            <div className="text-red-600 mb-4 p-4 bg-red-50 rounded-lg">
              ⚠️ Firebase no está configurado correctamente. Verifica las variables de entorno.
            </div>
          ) : null}
          
          <button
            onClick={handleGoogleLogin}
            disabled={!auth}
            className={`w-full font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center gap-3 ${
              !auth 
                ? 'bg-gray-400 cursor-not-allowed text-white' 
                : 'bg-red-500 hover:bg-red-600 text-white'
            }`}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Iniciar sesión con Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
