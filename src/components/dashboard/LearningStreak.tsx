"use client";
import React from "react";

export default function LearningStreak() {
  return (
    <section className="learning-streak">
      <h3>Learning Streak</h3>
      <div className="streak-days">28</div>
      <div className="streak-label">Days in a row</div>
      <div className="streak-bubbles">
        {[...Array(6)].map((_, i) => (
          <span key={i} className={i < 5 ? "filled" : "empty"}></span>
        ))}
      </div>
      <div className="keep-it-up">Keep it up!</div>
    </section>
  );
}
