import { Component } from '@angular/core';
@Component({
  selector: 'app-python',
  // template: `
  //   <h1>Tab Example</h1>
  //   <app-tab [tabs]="tabs" [activeTab]="selectedTab"></app-tab>
  // `,
  templateUrl: './python.component.html',
  styleUrls: ['./python.component.css'],
})
export class PythonComponent {
  selectedTab: Tab | undefined;
  activeTab: any;
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
}

export interface Tab {
  title: string;
  template: any;
}
