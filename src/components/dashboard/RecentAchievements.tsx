"use client";
import React from "react";

export default function RecentAchievements() {
  return (
    <section className="recent-achievements">
      <h3>Recent Achievements</h3>
      <ul>
        <li><span role="img" aria-label="trophy">🏆</span> Grammar Master<br /><span>Completed 50 grammar exercises</span> <span className="new">New</span></li>
        <li><span role="img" aria-label="chat">💬</span> Conversation Starter<br /><span>Had 10 AI conversations</span> <span className="new">New</span></li>
        <li><span role="img" aria-label="fire">🔥</span> Streak Champion<br /><span>30-day learning streak</span> <span className="new">New</span></li>
      </ul>
    </section>
  );
}
