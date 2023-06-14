import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Question {
  id: number;
  question: string;
  options: any[];
  answer: string;
}

interface SubmitResponse {
  score: number;
}

interface SelectedAnswers {
  id: number;
  answers: string[];
}

@Component({
  selector: 'app-quizdb',
  templateUrl: './quizdb.component.html',
  styleUrls: ['./quizdb.component.css'],
})
export class QuizdbComponent implements OnInit {
  @Input() quizTopic!: string;

  currentQuestionIndex = 0;
  questions: Question[] = [];
  quizSubmitted = false;
  score = 0;
  showAlert = false;
  quizFetched = false;
  selectedAnswers: SelectedAnswers[] = [];
  username: string | null = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    console.log(this.username);
    console.log(this.quizTopic);
    this.fetchQuizQuestions();
  }

  fetchQuizQuestions(): void {
    this.http
      .get<any>(`http://localhost:3000/api/quiz?topic=${this.quizTopic}`)
      .subscribe((response: any) => {
        // Transform the response data to match the expected format
        this.questions = response.map((item: any) => {
          return {
            id: item.id,
            question: item.question,
            options: item.options,
            answer: '',
          };
        });
        this.quizFetched = true;
      });
  }

  getCurrentQuestion(): Question {
    if (
      !this.quizFetched ||
      !this.questions ||
      this.currentQuestionIndex >= this.questions.length
    ) {
      return { id: 0, question: '', options: [], answer: '' };
    }

    return this.questions[this.currentQuestionIndex];
  }

  updateSelectedAnswer(selectedOption: string): void {
    const currentQuestion = this.getCurrentQuestion();
    const selectedAnswerIndex = this.selectedAnswers.findIndex(
      (answer) => answer.id === currentQuestion.id
    );

    if (selectedAnswerIndex > -1) {
      // Update existing answer
      this.selectedAnswers[selectedAnswerIndex].answers = [selectedOption];
    } else {
      // Add new answer
      this.selectedAnswers.push({
        id: currentQuestion.id,
        answers: [selectedOption],
      });
    }
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
    console.log(this.selectedAnswers);
    this.http
      .post<SubmitResponse>('http://localhost:3000/api/submit', {
        answers: this.selectedAnswers,
      })
      .subscribe((response: SubmitResponse) => {
        this.score = response.score;
      });
  }

  restartQuiz(): void {
    this.currentQuestionIndex = 0;
    this.quizSubmitted = false;
    this.score = 0;
    this.questions.forEach((question) => {
      question.answer = '';
    });
    this.selectedAnswers = [];
  }

  isAnswerSelected(): boolean {
    return !!this.getCurrentQuestion().answer;
  }
}
