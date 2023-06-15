import { Component, OnInit } from '@angular/core';
import { QuizdbComponent } from '../quizdb/quizdb.component';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css'],
})
export class JavascriptComponent implements OnInit {
  selectedTab: Tab | undefined;
  tabs: Tab[] = [
    {
      title: 'Basics',
      component: QuizdbComponent,
      quizTopic: 'Java Basics',
    },
    {
      title: 'Data Types',
      component: QuizdbComponent,
      quizTopic: 'Java Data Types',
    },
    {
      title: 'Control Flow',
      component: QuizdbComponent,
      quizTopic: 'Java Control Flow',
    },
  ];
  quizTopic: string;

  constructor() {
    this.quizTopic = this.tabs[0].quizTopic;
  }

  ngOnInit() {
    this.selectedTab = this.tabs[0]; // Select the first tab by default
    console.log(this.selectedTab.quizTopic);
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
