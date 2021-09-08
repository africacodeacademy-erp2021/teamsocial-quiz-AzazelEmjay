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
    {
      questionText: "Who had started the International Women’s Boxing Hall of Fame?",
      answerOptions: [
        { answerText: "Terri Moss", isCorrect: false },
        { answerText: "Sue TL Fox", isCorrect: true },
        { answerText: "Claressa Shields", isCorrect: false },
        { answerText: "Barbara Buttrick", isCorrect:false },
      ],
    },
    {
      questionText: "Which among the following is known as 'Bible of Cricket'?",
      answerOptions: [
        { answerText: "All Out Cricket", isCorrect: false },
        { answerText: "Cricinfo Magazine", isCorrect: false },
        { answerText: "Wisden", isCorrect: true },
        { answerText: "The Guide to Cricketers", isCorrect:false },
      ],
    },
    {
      questionText: "Which country has won the maximum number of medals in the all time history of Commonwealth Games?",
      answerOptions: [
        { answerText: "Australia", isCorrect: true  },
        { answerText: "England", isCorrect: false },
        { answerText: "India", isCorrect: false },
        { answerText: "Canada", isCorrect: false},
      ],
    },
    {
      questionText: "There are 30 balls in the game of snooker.",
      answerOptions: [
       
        { answerText: "True", isCorrect: false },
        { answerText: "False", isCorrect: true },
      ],
    },
    {
      questionText: "There has never been a woman chess master.",
      answerOptions: [
       
        { answerText: "True", isCorrect: false },
        { answerText: "False", isCorrect: true },
      ],
    },
  
  ];
  var randomIndex = Math.floor(Math.random()* questions.length);
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
  const data = JSON.stringify(localStorage.getItem("name"));
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
                 
              </div>
              <div className="question-text">
                {questions[randomIndex].questionText}
              </div>
            </div>

            <div className="answer-section">
              {questions[randomIndex].answerOptions.map((answerOptions) => (
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
