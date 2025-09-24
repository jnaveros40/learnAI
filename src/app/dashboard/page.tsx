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
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-main">
        <header className="dashboard-header">
          <div className="dashboard-title">
            <h1>Welcome back, Alex!</h1>
            <p>Continue your English learning journey</p>
          </div>
          <button onClick={handleLogout} className="logout-btn">Log out</button>
        </header>
        <div className="dashboard-content">
          <div className="dashboard-row">
            <ProgressOverview />
            <UpcomingLessons />
          </div>
          <div className="dashboard-row">
            <ContinueLearning />
            <WeeklyGoals />
            <LearningStreak />
          </div>
          <RecentAchievements />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
