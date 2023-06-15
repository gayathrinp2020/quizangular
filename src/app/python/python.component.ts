import { Component, OnInit } from '@angular/core';
import { QuizdbComponent } from '../quizdb/quizdb.component';

@Component({
  selector: 'app-python',
  templateUrl: './python.component.html',
  styleUrls: ['./python.component.css'],
})
export class PythonComponent implements OnInit {
  selectedTab: Tab | undefined;
  tabs: Tab[] = [
    {
      title: 'Basics',
      component: QuizdbComponent,
      quizTopic: 'Python Basic',
    },
    {
      title: 'Data Types',
      component: QuizdbComponent,
      quizTopic: 'Python Data Types',
    },
    {
      title: 'Control Flow',
      component: QuizdbComponent,
      quizTopic: 'Python Control Flow',
    },
    {
      title: 'Functions',
      component: QuizdbComponent,
      quizTopic: 'Python Functions',
    },
  ];
  quizTopic: string;

  constructor() {
    this.quizTopic = this.tabs[0].quizTopic;
  }

  ngOnInit() {
    this.selectedTab = this.tabs[0];
  }

  selectTab(tab: Tab) {
    this.selectedTab = tab;
    this.quizTopic = tab.quizTopic;
  }
}

interface Tab {
  title: string;
  component: any;
  quizTopic: string;
}
