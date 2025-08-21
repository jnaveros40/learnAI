"use client";
import React from "react";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo-section">
        <div className="logo">E</div>
        <div className="platform">LearnMio AI<br /><span>Learning Platform</span></div>
      </div>
      <nav className="main-nav">
        <ul>
          <li>Dashboard</li>
          <li>Learning
            <ul>
              <li>AI Tutor</li>
              <li>Interactive Lessons</li>
              <li>Vocabulary Builder</li>
            </ul>
          </li>
          <li>Live Tutoring</li>
          <li>Analytics</li>
          <li>Schedule</li>
          <li>Community</li>
        </ul>
      </nav>
      <div className="quick-stats">
        <div>Current Level <span className="level">B2</span></div>
        <div>Streak <span className="streak">28 days</span></div>
        <div>This Week <span className="lessons">12 lessons</span></div>
      </div>
    </aside>
  );
}
