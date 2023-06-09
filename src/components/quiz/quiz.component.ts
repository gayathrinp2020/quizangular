import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent {
  questions = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'Berlin', 'London', 'Rome'],
      answer: 'Paris',
      selected: '',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      answer: 'Mars',
      selected: '',
    },
    {
      question: 'What is the largest ocean in the world?',
      options: [
        'Pacific Ocean',
        'Atlantic Ocean',
        'Indian Ocean',
        'Arctic Ocean',
      ],
      answer: 'Pacific Ocean',
      selected: '',
    },
  ];

  submitQuiz() {
    let score = 0;
    this.questions.forEach((question) => {
      if (question.selected === question.answer) {
        score++;
      }
    });
    alert(`Your score is ${score}/${this.questions.length}`);
  }
}
