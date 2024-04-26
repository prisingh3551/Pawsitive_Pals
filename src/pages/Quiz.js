import React, { useState } from "react";
import './quiz.css';

function Quiz() {
    const QuizData = [
        {
          question: "How would you describe your ideal weeklelnd activity?",
          options: ["Outdoor adventures and walks in park", "Cozying up with a good look or movie"],
          answer: "Outdoor adventures and walks in park"
        },
        {
          question: "What size of pet you prefer ?",
          options: ["Large and energetic", "Small and cuddly"],
          answer: "Large and energetic"
        },
        {
          question: "What type of personality do you appreciate in a pet?",
          options: ["Loyal and Playful", "Independent and mysterious"],
          answer: "Loyal and Playful"
        },
        {
          question: "How much time are you willing to spend on pet grooming ?",
          options: ["I enjoy grooming and spending time with my pet", "Minimal grooming effort"],
          answer: "I enjoy grooming and spending time with my pet"
        },
        {
          question: "Your Ideal pet would be known for... ?",
          options: ["Protecting the family and being a great companion", "Being affectionate and a great lap warmer"],
          answer: "Protecting the family and being a great companion"
        },
        {
          question: "What’s your opinion on training pets ?",
          options: ["I enjoy training the teaching tricks", "I prefer a pet that is more independent"],
          answer: "I enjoy training the teaching tricks"
        },
        {
          question: "When it comes to noise level you prefer.. ?",
          options: ["Some barking is fine, its part of fun", "A quiet and serene environment"],
          answer: "Some barking is fine, its part of fun"
        }
      ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState("");

  const handleAnswerOptionClick = (selectedOption) => {
    if (selectedOption === QuizData[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < QuizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      finalResult();
    }
  };
  const finalResult = () => {
    if (score >= 4)
      setResult("dog");
    else
      setResult("cat");
  };

  return (
    <div className="quiz">
      {showScore ? (
        <div className="score-section">
          You are a {result} person.
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
