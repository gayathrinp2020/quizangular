import { Component, OnInit } from '@angular/core';
import { QuizdbComponent } from '../quizdb/quizdb.component';

@Component({
  selector: 'app-reactjs',
  templateUrl: './rectjs.component.html',
  styleUrls: ['./rectjs.component.css'],
})
export class RectjsComponent implements OnInit {
  selectedTab: Tab | undefined;
  tabs: Tab[] = [
    {
      title: 'Basics',
      component: QuizdbComponent,
      quizTopic: 'React Basics',
    },
    {
      title: 'React JSX',
      component: QuizdbComponent,
      quizTopic: 'React JSX',
    },
    {
      title: 'Props and States',
      component: QuizdbComponent,
      quizTopic: 'React Props and States',
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
