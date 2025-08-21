"use client";
import React from "react";

export default function UpcomingLessons() {
  return (
    <section className="upcoming-lessons">
      <h3>Upcoming Lessons</h3>
      <ul>
        <li>
          <div>Advanced Grammar: Conditional Sentences</div>
          <div className="lesson-meta">2:00 PM <span className="tag ai-tutor">AI Tutor</span></div>
        </li>
        <li>
          <div>Business English Conversation</div>
          <div className="lesson-meta">4:30 PM <span className="tag live-tutor">Live Tutor</span></div>
        </li>
        <li>
          <div>IELTS Writing Practice</div>
          <div className="lesson-meta">Tomorrow 10:00 AM <span className="tag self-study">Self-Study</span></div>
        </li>
      </ul>
      <button className="view-schedule">View Full Schedule</button>
    </section>
  );
}
