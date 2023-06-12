import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Question {
  question: string;
  options: any[];
  answer: string;
}

interface QuizResponse {
  questions: Question[];
}

interface SubmitResponse {
  score: number;
}

@Component({
  selector: 'app-quizdb',
  templateUrl: './quizdb.component.html',
  styleUrls: ['./quizdb.component.css'],
})
export class QuizdbComponent implements OnInit {
  currentQuestionIndex = 0;
  questions: Question[] = [];
  quizSubmitted = false;
  score = 0;
  showAlert = false;
  quizFetched = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchQuizQuestions();
  }

  fetchQuizQuestions(): void {
    this.http
      .get<any>('http://localhost:3000/api/quiz') // Use 'any' type for the response
      .subscribe((response: any) => {
        // Transform the response data to match the expected format
        this.questions = response.map((item: any) => {
          return {
            question: item.question,
            options: item.options,
            answer: item.answer,
          };
        });
        this.quizFetched = true;
        console.log(this.questions);
      });
  }

  getCurrentQuestion(): Question {
    if (
      !this.quizFetched ||
      !this.questions ||
      this.currentQuestionIndex >= this.questions.length
    ) {
      return { question: '', options: [], answer: '' };
    }

    return this.questions[this.currentQuestionIndex];
  }

  nextQuestion(): void {
    if (!this.isAnswerSelected()) {
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 3000);
      return;
    }

    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  submitQuiz(): void {
    this.quizSubmitted = true;

    this.http
      .post<SubmitResponse>('http://localhost:3000/api/submit', {
        answers: this.questions,
      })
      .subscribe((response: SubmitResponse) => {
        this.score = response.score;
      });
  }

  restartQuiz(): void {
    this.currentQuestionIndex = 0;
    this.quizSubmitted = false;
    this.score = 0;
  }

  isAnswerSelected(): boolean {
    return !!this.getCurrentQuestion().answer;
  }
}
