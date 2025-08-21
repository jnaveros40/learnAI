"use client";

import React, { useEffect, useState } from "react";
import { signOut, onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../../firebaseConfig";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && auth) {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
        
        // Si no hay usuario autenticado, redirigir al login
        if (!currentUser) {
          window.location.href = "/login";
        }
      });

      return () => unsubscribe();
    } else {
      setLoading(false);
    }
  }, []);

  const handleLogout = async () => {
    try {
      if (auth) {
        await signOut(auth);
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Cargando...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Redirigiendo...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold">LearnAI Dashboard</h1>
            </div>
            <div className="flex items-center">
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition duration-200"
              >
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 px-4">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              ¡Bienvenido a tu plataforma de aprendizaje!
            </h2>
            <p className="text-gray-600">
              Has iniciado sesión exitosamente. Aquí podrás acceder a todos tus cursos y contenido educativo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
