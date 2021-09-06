import React, { useState } from "react";

export default function Sports() {
  const questions = [
    {
      questionText: "Who is deemed the fastest man alive in sports?",
      answerOptions: [
        { answerText: "Barry Allen", isCorrect: false },
        { answerText: "Chad le Claus", isCorrect: false },
        { answerText: "Usain Bolt", isCorrect: true },
        { answerText: "Pierro Maximoff", isCorrect: false },
      ],
    },
    {
      questionText: "Which soccer player has scored the most goals ever?",
      answerOptions: [
        { answerText: "Ronaldhino", isCorrect: false },
        { answerText: "Christiano Ronaldo", isCorrect: false },
        { answerText: "Neymar", isCorrect: false },
        { answerText: "Messi", isCorrect: true },
      ],
    },
    {
      questionText: "After how many Year’s FIFA World Cup is held??",
      answerOptions: [
        { answerText: "4 years", isCorrect: true },
        { answerText: "2 years", isCorrect: false },
        { answerText: "3 years", isCorrect: false },
        { answerText: "Every year", isCorrect: false },
      ],
    },

    {
      questionText: "a typical golf course has how many holes?",
      answerOptions: [
        { answerText: "9", isCorrect: false },
        { answerText: "12", isCorrect: false },
        { answerText: "18", isCorrect: true },
        { answerText: "7", isCorrect: false },
      ],
    },
    {
      questionText: "after how many years are the olympic games held?",
      answerOptions: [
        { answerText: "5", isCorrect: false },
        { answerText: "2", isCorrect: false },
        { answerText: "3", isCorrect: false },
        { answerText: "4", isCorrect: true },
      ],
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestions = currentQuestion + 1;

    if (nextQuestions < questions.length) {
      setCurrentQuestion(nextQuestions);
    } else {
      setShowScore(true);
    }
  };
  const data = JSON.stringify(localStorage.getItem("user"));
  const name = data.replace('"','');
  const username = name.replace('"','');

  return (
    <>
      <h1 className="header">Sports Quiz</h1>
      <p>Player Name: {username}</p>
      <div className="app">
        {showScore ? (
          <div className="score-section">
            {username} You scored {score} out of {questions.length}
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>
                {questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>

            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOptions) => (
                <button
                  onClick={() =>
                    handleAnswerButtonClick(answerOptions.isCorrect)
                  }
                >
                  {answerOptions.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
