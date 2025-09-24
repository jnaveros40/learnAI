"use client";
import "./dashboard.css";



import React, { useEffect, useState } from "react";
import { signOut, onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import Sidebar from "../../components/dashboard/Sidebar";
import ProgressOverview from "../../components/dashboard/ProgressOverview";
import ContinueLearning from "../../components/dashboard/ContinueLearning";
import RecentAchievements from "../../components/dashboard/RecentAchievements";
import UpcomingLessons from "../../components/dashboard/UpcomingLessons";
import WeeklyGoals from "../../components/dashboard/WeeklyGoals";
import LearningStreak from "../../components/dashboard/LearningStreak";
import Footer from "../components/Footer";

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
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-8">
          <header className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                Welcome back, {user?.displayName?.split(' ')[0] || 'Student'}!
              </h1>
              <p className="text-gray-500 dark:text-gray-400">Continue your English learning journey</p>
            </div>
            <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">
              Log out
            </button>
          </header>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <ContinueLearning />
              <ProgressOverview />
            </div>
            <div className="space-y-8">
              <UpcomingLessons />
              <RecentAchievements />
              <WeeklyGoals />
              <LearningStreak />
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
