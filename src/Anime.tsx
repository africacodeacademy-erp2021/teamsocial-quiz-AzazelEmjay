import React, { useState } from "react";
import Loser from "./Lose/images/104-1046176_smiling-emoji-clipart.png";
import Winner from "./winner/images/Emoji-1.jpg"

export default function Anime(props: any) {
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

  const [option, setOption] = useState();
  const [questionLength, setQuestionLength] = useState(10);
  const [random, setRandom] = useState(questions);


  function shuffle(array: any) {
    var number = array.length,
      temporary,
      index;
    while (number > 0) {
      index = Math.floor(Math.random() * number);
      number--;

      temporary = array[number];
      array[number] = array[index];
      array[index] = temporary;
    }
    return array;
  }

  function optionChange(event: any) {
    setOption(event.target.value);
    setQuestionLength(event.target.value);

    if (questionLength === 5) {
      shuffle(questions);
      questions.splice(5, 5);
      let temporary = questions;
      setRandom(temporary);

    } else if (questionLength === 7) {
      shuffle(questions);
      questions.splice(7, 3);
      let temporary = questions;
      setRandom(temporary);

    } else {
      shuffle(questions);
      questions.splice(10, 10);
      let temporary = questions;
      setRandom(temporary);
    }

    return questionLength;
  }


  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const handleAnswerButtonClick = (isCorrect: boolean) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestions = currentQuestion + 1;

    if (nextQuestions < questionLength) {
      setCurrentQuestion(nextQuestions);
    } else {
      setShowScore(true);
    }
  };
  const data = JSON.stringify(localStorage.getItem("name"));
  const name = data.replace('"', '');
  const username = name.replace('"', '');


  const win = questionLength / 2;
  let threshold = " ";
  let image ="";
  if (score >= win) {
    threshold = "You passed the quiz";
    image = Loser;
  }
  else {
    threshold = "You failed the quiz";
    image = Winner
  }

  return (
    <>
      <h1 className="header">Anime Quiz</h1>

      <div className="app">
        {showScore ? (
          <div className="score-section">
            <p>
              {username} You scored {score} out of {questionLength} <br />
              {threshold} <br />
              <img src={image} alt="results" />
            </p>
            <br />
            <button>Restart Game</button>
            <br />
            <button>Choose a different Category</button>
          </div>
        ) : (
          <>
            <div className="Border">
              <div className="answers">
                <p>Select the number of questions for Your game</p>
                <select name="option" onChange={optionChange}>
                <option value="10">All questions</option>
                <option value="5" >5</option>
                <option value="7" >7</option>
                </select>
              </div>
              <p>Player Name: {username}</p>
              <div className="question-section">
                <div className="question-count">
                  <span>Question {currentQuestion + 1}</span>
                </div>
                <div className="question-text">
                  {random[currentQuestion].questionText}
                </div>
              </div>

              <div className="answer-section">
                {random[currentQuestion].answerOptions.map((answerOptions) => (
                  <button
                    onClick={() =>
                      handleAnswerButtonClick(answerOptions.isCorrect)
                    }
                  >
                    {answerOptions.answerText}
                  </button>
                ))}
                <br />
                Your score is {score}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
