import React, { useState } from "react";

function Quiz() {
    const QuizData = [
        {
          question: "What is the capital of France?",
          options: ["Paris", "London", "Berlin", "Rome"],
          answer: "Paris"
        },
        {
          question: "Who wrote 'To Kill a Mockingbird'?",
          options: ["Harper Lee", "Stephen King", "J.K. Rowling", "Jane Austen"],
          answer: "Harper Lee"
        },
        // Add more questions here
      ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (selectedOption) => {
    if (selectedOption === QuizData[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < QuizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {QuizData.length}
        </div>
      ) : (
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestion + 1}</span>/{QuizData.length}
          </div>
          <div className="question-text">
            {QuizData[currentQuestion].question}
          </div>
          <div className="answer-section">
            {QuizData[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
