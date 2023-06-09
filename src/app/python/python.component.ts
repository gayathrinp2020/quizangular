import { Component } from '@angular/core';

@Component({
  selector: 'app-python',
  templateUrl: './python.component.html',
  styleUrls: ['./python.component.css'],
})
export class PythonComponent {
  selectedTab: Tab | undefined;
  tabs: Tab[] = [
    {
      title: 'Tab 1',
      template: 'Content for Tab 1',
    },
    {
      title: 'Tab 2',
      template: 'Content for Tab 2',
    },
    {
      title: 'Tab 3',
      template: 'Content for Tab 3',
    },
  ];

  selectTab(tab: Tab) {
    this.selectedTab = tab;
  }
}

interface Tab {
  title: string;
  template: string;
}
