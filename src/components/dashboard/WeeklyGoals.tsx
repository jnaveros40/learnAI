"use client";
import React from "react";

export default function WeeklyGoals() {
  return (
    <section className="weekly-goals">
      <h3>This Week&apos;s Goals</h3>
      <ul>
        <li>Complete 5 lessons <div className="progress-bar"><div className="progress" style={{ width: "80%" }}></div></div> 4/5</li>
        <li>Practice speaking 3 times <div className="progress-bar"><div className="progress" style={{ width: "66%" }}></div></div> 2/3</li>
        <li>Learn 20 new words <div className="progress-bar"><div className="progress" style={{ width: "100%" }}></div></div> 20/20</li>
      </ul>
    </section>
  );
}
