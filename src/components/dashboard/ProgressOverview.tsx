"use client";
import React from "react";

export default function ProgressOverview() {
  return (
    <section className="progress-overview">
      <h2>Your Progress</h2>
      <div className="level">Current level: Intermediate (B2)</div>
      <div className="progress-bar">
        <div className="progress" style={{ width: "75%" }}></div>
      </div>
      <div className="stats">
        <div className="stat"><div className="icon">📘</div><div>156<br />Lessons Completed</div></div>
        <div className="stat"><div className="icon">🤖</div><div>42<br />AI Conversations</div></div>
        <div className="stat"><div className="icon">👨‍🏫</div><div>18<br />Tutor Sessions</div></div>
        <div className="stat"><div className="icon">🏅</div><div>12<br />Achievements</div></div>
      </div>
    </section>
  );
}
