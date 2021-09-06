import React, { useState } from "react";

export default function Movies() {
  const questions = [
    {
      questionText:
        "Who says this line in Avengers EndGame, 'You could not live with your own failure, could you..'",
      answerOptions: [
        { answerText: "Stephen Strange", isCorrect: false },
        { answerText: "He Who Remains", isCorrect: false },
        { answerText: "Thanos", isCorrect: true },
        { answerText: "Nick Fury", isCorrect: false },
      ],
    },
    {
      questionText: "Who was the true villain in Zack Snyder's Justice League?",
      answerOptions: [
        { answerText: "Steppenwolf", isCorrect: false },
        { answerText: "The Mother Box", isCorrect: false },
        { answerText: "Superman", isCorrect: false },
        { answerText: "Darkseid", isCorrect: true },
      ],
    },
    {
      questionText: "what is the highest grossing movie of all time?",
      answerOptions: [
        { answerText: "Avatar", isCorrect: true },
        { answerText: "Avengers Endgame ", isCorrect: false },
        { answerText: "Titanic", isCorrect: false },
        {
          answerText: "Star Wars: Episode VII - The Force Awakens",
          isCorrect: false,
        },
      ],
    },

    {
      questionText: "Which Marvel series is currently streaming this month?",
      answerOptions: [
        { answerText: "HawkEye", isCorrect: false },
        { answerText: "Loki", isCorrect: false },
        { answerText: "What If..?", isCorrect: true },
        { answerText: "Wandavision", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which of these Marvels movies is not set to be released in 2021?",
      answerOptions: [
        { answerText: "Eternals", isCorrect: false },
        { answerText: "Spider-man: No Way Home", isCorrect: false },
        { answerText: "Black Widow", isCorrect: false },
        { answerText: "Dr. Strange: Multitude Of Madness", isCorrect: true },
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
      <h1 className="header">Movies Quiz</h1>
      <p>Player Name: {username}</p>
      <div className="app">
        {showScore ? (
          <div className="score-section">
            {data} You scored {score} out of {questions.length}
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
