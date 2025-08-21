"use client";
import React from "react";

export default function ContinueLearning() {
  return (
    <section className="continue-learning">
      <h3>Continue Learning</h3>
      <p>Pick up where you left off</p>
      <div className="learning-options">
        <button className="ai-tutor">AI Tutor<br /><span>Practice conversation</span></button>
        <button className="interactive-lesson">Interactive Lesson<br /><span>Grammar & Vocabulary</span></button>
        <button className="book-tutor">Book Tutor<br /><span>Live 1-on-1 session</span></button>
      </div>
    </section>
  );
}
