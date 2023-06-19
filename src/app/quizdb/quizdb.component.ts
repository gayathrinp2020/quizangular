import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Question {
  id: number;
  question: string;
  options: any[];
  answer: string;
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
export class QuizdbComponent implements OnInit, OnChanges {
  @Input() quizTopic!: string;

  currentQuestionIndex = 0;
  questions: Question[] = [];
  quizSubmitted = false;
  score = 0;
  userid = 0;
  username: any;

  showAlert = false;
  quizFetched = false;
  selectedAnswers: SelectedAnswers[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchQuizQuestions();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['quizTopic'] && !changes['quizTopic'].firstChange) {
      this.fetchQuizQuestions();
    }
  }

  fetchQuizQuestions(): void {
    this.currentQuestionIndex = 0;
    this.quizSubmitted = false;
    this.score = 0;
    this.showAlert = false;
    this.selectedAnswers = [];
    const token = localStorage.getItem('token');
    const headers = { Authorization: `${token}` };
    this.http
      .get<any>(`http://localhost:3000/api/quiz?topic=${this.quizTopic}`, {
        headers,
      })
      .subscribe((response: any) => {
        const data = response.data;
        const userid = response.decoded.id;
        const username = response.decoded.username;
        localStorage.setItem('userid', userid);
        localStorage.setItem('username', username);
        // Transform the response data to match the expected format
        this.questions = data.map((item: any) => {
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
    const userid = localStorage.getItem('userid');
    const user_name = localStorage.getItem('username');
    this.http
      .post<any>(
        `http://localhost:3000/api/submit?topic=${this.quizTopic}&userid=${userid}&username=${user_name}`,
        {
          answers: this.selectedAnswers,
        }
      )
      .subscribe((response: any) => {
        this.score = response.score;
        this.userid = response.data.user_id;
        this.username = user_name;
        console.log(this.userid, this.username);
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
