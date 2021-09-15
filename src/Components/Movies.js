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

    {
      questionText: "Who plays Peter Quill in Guardians Of The Galaxy?",
      answerOptions: [
        { answerText: "Dave Bautista", isCorrect: false },
        { answerText: "Chris Evans", isCorrect: false },
        { answerText: "Chris Hemsworth", isCorrect: false },
        { answerText: "Chris Pratt", isCorrect: true },
      ],
    },

    {
      questionText:
        "Who is the actor behind Groot from the guardians of the galaxy?",
      answerOptions: [
        { answerText: "Sylvester Stallone", isCorrect: false },
        { answerText: "Dwayne Johnson", isCorrect: false },
        { answerText: "Morgan Freeman", isCorrect: false },
        { answerText: "Vin Diesel", isCorrect: true },
      ],
    },
    {
      questionText: "Red Skull Guards the soul stone in Avengers Infinity War",
      answerOptions: [
        { answerText: "True", isCorrect: true },
        { answerText: "False", isCorrect: false },
      ],
    },
    {
      questionText:
        "Tony Stark said the line, 'You're not the only one cursed with knowledge'",
      answerOptions: [
        { answerText: "True", isCorrect: false },
        { answerText: "False", isCorrect: true },
      ],
    },

    {
      questionText:
        "Tom Holland's first appearance in Marvel as spiderman was in Captain America Civil War ",
      answerOptions: [
        { answerText: "True", isCorrect: true },
        { answerText: "False", isCorrect: false },
      ],
    },
  ];

  const [option, setOption] = useState();
  const [questionLength, setQuestionLength] = useState(10);
  const [random, setRandom] = useState(questions);

  
  function shuffle(array){
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

  function optionChange(event) {
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



  const handleAnswerButtonClick = (isCorrect) => {
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
  const name = data.replace('"', "");
  const username = name.replace('"', "");

  const image = JSON.stringify(localStorage.getItem("image"));
  const Imagename = image.replace('"', "");
  const imageName= Imagename.replace('"', "");

  const loseImage = JSON.stringify(localStorage.getItem("lose"));
  const loserImage= loseImage.replace('"', "");
  const imageLoser= loserImage.replace('"', "");

  const win = questionLength/2;
  let threshold = " ";

  let Img="";
  if(score >= win){
threshold = "You passed the quiz";
  Img = imageName;
  }
  else{
  threshold = "You failed the quiz";
  Img = imageLoser;
  
  }

  return (
    <>
      <h1 className="header">Movies Quiz</h1>

      <div className="app">
        {showScore ? (
          <div className="score-section">
            <p>
              {username} You scored {score} out of {questionLength}{" "}<br/>
              {threshold}
              <img src={Img} alt="threshold"/>
 
            </p>
            <br />
            <button>Restart Game</button>
            <br />
            <button>Choose a different Category</button>
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>
    </>
  );
}
