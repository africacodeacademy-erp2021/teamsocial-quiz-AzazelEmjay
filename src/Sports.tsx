import React, { useState } from "react";
import Loser from "./Lose/images/104-1046176_smiling-emoji-clipart.png";
import Winner from "./winner/images/Emoji-1.jpg"

export default function Sports(props:any) {
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
  const [option, setOption] = useState();
  const [questionLength, setQuestionLength] = useState(10);
  const [random, setRandom] = useState(questions);

  
  function shuffle(array: any[]){
    var number = array.length,
    temporary,
    index;
    while(number> 0){
      index = Math.floor(Math.random()* number);
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

    if(questionLength === 5){
      shuffle(questions);
      questions.splice(5, 5);
      let temporary = questions;
      setRandom(temporary);

    } else if (questionLength === 7){
      shuffle(questions);
      questions.splice(7, 3);
      let temporary = questions;
      setRandom(temporary);

    }else{
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
  const name = data.replace('"','');
  const username = name.replace('"','');

  const win = questionLength/2;
  let threshold = " ";
  let image = "";

  if(score >= win){
threshold = "You passed the quiz";
image = Loser;
  }
  else{
  threshold = "You failed the quiz";
  image = Winner;
  }

  return (
    <>
      <h1 className="header">Sports Quiz</h1>
      
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
          <div className = "Border">
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
