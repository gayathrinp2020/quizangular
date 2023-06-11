import { Component } from '@angular/core';
import { QuizComponent } from 'src/components/quiz/quiz.component';
@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css'],
})
export class JavascriptComponent {
  selectedTab: Tab | undefined;

  tabs: Tab[] = [
    {
      title: 'Tab 1',
      component: QuizComponent,
    },
    {
      title: 'Tab 2',
      component: QuizComponent,
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
