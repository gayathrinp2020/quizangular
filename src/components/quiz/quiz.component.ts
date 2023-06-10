import { Component } from '@angular/core';
interface Question {
  question: string;
  options: string[];
  selected: string;
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent {
  currentQuestionIndex = 0;
  questions = [
    {
      question:
        'What is the output of the following code?\n\nprint(2 + 3 * 4 - 6)',
      options: ['A. 5', 'B. 11', 'C. 8', 'D. 13'],
      selected: '',
    },
    {
      question: 'Which of the following is not a Python data type?',
      options: [
        'A. Integer',
        'B. String',
        'C. Float',
        'D. Boolean',
        'E. Dictionary',
      ],
      selected: '',
    },
    {
      question:
        'What is the correct way to comment multiple lines of code in Python?',
      options: ['A. /* */', 'B. //', 'C. <!-- -->', 'D. #'],
      selected: '',
    },
  ];

  quizSubmitted = false;
  score = 0;

  getCurrentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  submitQuiz() {
    this.quizSubmitted = true;

    // Calculate the score
    this.score = this.questions.filter(
      (question) => question.selected === 'Option A'
    ).length;
  }
  restartQuiz() {
    this.currentQuestionIndex = 0;
    this.quizSubmitted = false;
    this.score = 0;
    this.questions.forEach((question) => (question.selected = ''));
  }
}
