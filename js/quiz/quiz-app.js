import {Question} from "./question.js";
import {Quiz} from "./quiz.js";

const myQuiz = new Quiz();

// Ajout de questions
myQuiz.addQuestion(new Question("What is the capital of France?", ["Paris", "London", "Rome"], "Paris"));
myQuiz.addQuestion(new Question("Who painted the Mona Lisa?", ["Van Gogh", "Da Vinci", "Picasso"], "Da Vinci"));
myQuiz.addQuestion(new Question("What is the answer to life, the universe and everything?", ["Pi", "42", "Don't Panic"], "42"));
myQuiz.addQuestion(new Question("What is the airspeed velocity of an unladen swallow?", ["What do you mean? African or European swallow?", "15 meters per second", "I don't know that!"], "What do you mean? African or European swallow?"));
myQuiz.addQuestion(new Question("What is the answer to this question?", ["True", "False", "I don't know that!"], "I don't know that!"));
myQuiz.addQuestion(new Question("What is the best programming language?", ["JavaScript", "Java", "C++"], "Java"));
myQuiz.addQuestion(new Question("What is the best car?", ["Ferrari", "Porsche", "Lamborghini"], "Porsche"));



function displayQuestion() {
  const currentQuestion = myQuiz.questions[myQuiz.currentQuestionIndex];
  document.getElementById("question").innerText = currentQuestion.text;
  const choicesContainer = document.getElementById("choices");
  choicesContainer.innerHTML = "";
  currentQuestion.choices.forEach(choice => {
    const button = document.createElement("button");
    button.innerText = choice;
    button.onclick = () => answerQuestion(choice);
    choicesContainer.appendChild(button);
  });
  questionCounter.innerText = `Question ${myQuiz.currentQuestionIndex + 1}/${myQuiz.questions.length}`;
}

function answerQuestion(choice) {
  myQuiz.answerQuestion(choice);
  if (myQuiz.isFinished()) {
    document.getElementById("quiz").style.display = 'none';
    const scoreElement = document.getElementById("score");
    scoreElement.innerText = myQuiz.displayScore();
    scoreElement.style.display = 'block';
  } else {
    displayQuestion();
  }
}

function nextQuestion() {
  myQuiz.nextQuestion();
  displayQuestion();
}

// Initialiser l'affichage de la première question
window.onload = displayQuestion;
