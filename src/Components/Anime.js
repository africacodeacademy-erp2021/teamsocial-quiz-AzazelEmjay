import React, { useState } from "react";

export default function Anime() {
  const questions = [
    {
      questionText: "Who is the main character of Bleach?",
      answerOptions: [
        { answerText: "Byakuya Kuchiki", isCorrect: false },
        { answerText: "Kenpachi Zaraki", isCorrect: false },
        { answerText: "Ichigo Kurosaki", isCorrect: true },
        { answerText: "Renji Abarai", isCorrect: false },
      ],
    },
    {
      questionText: "What is the name of the king of the pirates in One Piece?",
      answerOptions: [
        { answerText: "Bullet", isCorrect: false },
        { answerText: "Sakazuki Akainu", isCorrect: false },
        { answerText: "Monkey D. Luffy", isCorrect: false },
        { answerText: "Gol D. Roger", isCorrect: true },
      ],
    },
    {
      questionText: "Who is the armor titan in Attack On Titan?",
      answerOptions: [
        { answerText: "Reiner", isCorrect: true },
        { answerText: "Mikasa ", isCorrect: false },
        { answerText: "Bertolt", isCorrect: false },
        { answerText: "Levi", isCorrect: false },
      ],
    },

    {
      questionText: "Who is the masked man in Naruto Shippuden",
      answerOptions: [
        { answerText: "Minato Namikaze", isCorrect: false },
        { answerText: "Madara Uchiha", isCorrect: false },
        { answerText: "Obito Uchiha", isCorrect: true },
        { answerText: "Sasuke Uchiha", isCorrect: false },
      ],
    },
    {
      questionText: "Which element does Head Captain Yamamoto wield in Bleach?",
      answerOptions: [
        { answerText: "Water", isCorrect: false },
        { answerText: "Earth", isCorrect: false },
        { answerText: "Air", isCorrect: false },
        { answerText: "Fire", isCorrect: true },
      ],
    },
    {
      questionText: "Who killed Lelouche Lemperouge in Code Geass?",
      answerOptions: [
        { answerText: "Suzaku Kururugi", isCorrect: true },
        { answerText: "CC", isCorrect: false },
        { answerText: "Kaname Ohgi", isCorrect: false },
        { answerText: "None", isCorrect: false },
      ],
    },
    {
      questionText: "Who did Naruto marry at the end of Naruto Shippuden?",
      answerOptions: [
        { answerText: "Sakura Haruno", isCorrect: false },
        { answerText: "ino Yamanaka", isCorrect: false },
        { answerText: "Hinata Hyuga", isCorrect: true },
        { answerText: "Tenten", isCorrect: false },
      ],
    },
    {
      questionText: "Which of these anime series is not Shounen",
      answerOptions: [
        { answerText: "Bleach", isCorrect: false },
        { answerText: "One Punch Man", isCorrect: true },
        { answerText: "Naruto", isCorrect: false },
        { answerText: "Dragon Ball", isCorrect: false },
      ],
    },
    {
      questionText: "Who is the main character in Fairy Tail?",
      answerOptions: [
        { answerText: "Natsu Dragneel", isCorrect: false },
        { answerText: "Lucy Heartfelia", isCorrect: true },
        { answerText: "Erza Scarlett", isCorrect: false },
        { answerText: "Grey Fullbuster", isCorrect: false },
      ],
    },
    {
      questionText: "Tensa Zangetsu is the name of Ichigo's Bankai",
      answerOptions: [
        { answerText: "True", isCorrect: true },
        { answerText: "False", isCorrect: false },
        
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
    const length = 7;
    if (nextQuestions < length) {
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
      <h1 className="header">Anime Quiz</h1>
      <p>Player Name: {username}</p>
      <div className="app">
        {showScore ? (
          <div className="score-section">
            {username} You scored {score} out of 7
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>
           
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
