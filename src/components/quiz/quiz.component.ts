import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
interface Question {
  question: string;
  options: string[];
  selected: string;
  answer: string;
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent {
  currentQuestionIndex = 0;
  questions: Question[] = [
    {
      question:
        'What is the output of the following code?\n\nprint(2 + 3 * 4 - 6)',
      options: ['A. 5', 'B. 11', 'C. 8', 'D. 13'],
      selected: '',
      answer: 'A. 5', // Correct answer for the first question
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
      answer: 'E. Dictionary', // Correct answer for the second question
    },
    {
      question:
        'What is the correct way to comment multiple lines of code in Python?',
      options: ['A. /* */', 'B. //', 'C. <!-- -->', 'D. #'],
      selected: '',
      answer: 'D. #', // Correct answer for the third question
    },
  ];

  quizSubmitted = false;
  score = 0;
  showAlert = false;

  getCurrentQuestion(): Question {
    return this.questions[this.currentQuestionIndex];
  }

  nextQuestion(): void {
    if (!this.isAnswerSelected()) {
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 3000); // Hide the alert after 3 seconds
      return;
    }

    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }
  submitQuiz(): void {
    this.quizSubmitted = true;

    // Calculate the score
    this.score = this.questions.filter(
      (question) => question.selected === question.answer
    ).length;
  }

  restartQuiz(): void {
    this.currentQuestionIndex = 0;
    this.quizSubmitted = false;
    this.score = 0;
    this.questions.forEach((question) => (question.selected = ''));
  }

  isAnswerSelected(): boolean {
    return !!this.getCurrentQuestion().selected;
  }
}
