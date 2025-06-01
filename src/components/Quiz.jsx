import React, { useState } from "react";
import { quiz } from "../data/quiz";

const Quiz = () => {
  const [score, setScore] = useState(null);
  const [answers, setAnswers] = useState(Array(quiz.length).fill(null));

  const handleChange = (qIndex, aIndex) => {
    const newAnswers = [...answers];
    newAnswers[qIndex] = aIndex;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const s = quiz.reduce((acc, q, i) => acc + (q.answer === answers[i] ? 1 : 0), 0);
    setScore(s);
  };

  return (
    <div>
      <h2>Quiz</h2>
      {quiz.map((q, i) => (
        <div key={i}>
          <p><strong>{q.question}</strong></p>
          {q.options.map((opt, j) => (
            <label key={j}>
              <input
                type="radio"
                name={`q${i}`}
                checked={answers[i] === j}
                onChange={() => handleChange(i, j)}
              />{" "}
              {opt}
            </label>
          ))}
        </div>
      ))}
      <br />
      <button onClick={handleSubmit}>Soumettre</button>
      {score !== null && <p>Score : {score} / {quiz.length}</p>}
    </div>
  );
};

export default Quiz;