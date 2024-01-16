export class Quiz {
  constructor() {
    this.questions = [];
    this.currentQuestionIndex = 0;
    this.score = 0;
  }

  addQuestion(question) {
    this.questions.push(question);
  }

  answerQuestion(answer) {
    if (this.questions[this.currentQuestionIndex].isCorrectAnswer(answer)) {
      this.score++;
    }
    this.nextQuestion();
  }

  nextQuestion() {
    this.currentQuestionIndex++;
  }

  isFinished() {
    return this.currentQuestionIndex >= this.questions.length;
  }

  displayScore() {
    return `Your score is: ${this.score}/${this.questions.length}`;
  }
}
