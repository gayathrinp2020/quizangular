import { Component, OnInit } from '@angular/core';
import { QuizComponent } from 'src/components/quiz/quiz.component';
import { QuizdbComponent } from '../quizdb/quizdb.component';

@Component({
  selector: 'app-python',
  templateUrl: './python.component.html',
  styleUrls: ['./python.component.css'],
})
export class PythonComponent {
  selectedTab: Tab | undefined;

  tabs: Tab[] = [
    {
      title: 'Python Basics',
      component: QuizdbComponent,
    },
    {
      title: 'Tab 2',
      component: QuizdbComponent,
    },
    {
      title: 'Tab 3',
      component: QuizComponent,
    },
  ];

  ngOnInit() {
    this.selectedTab = this.tabs[0]; // Select the first tab by default
  }
  selectTab(tab: Tab) {
    this.selectedTab = tab;
  }
}

interface Tab {
  title: string;
  component: any;
}
