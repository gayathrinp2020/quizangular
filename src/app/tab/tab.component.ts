import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
})
export class TabComponent {
  @Input() tabs: Tab[] = [];
  selectedTab: Tab | undefined;

  selectTab(tab: Tab) {
    this.selectedTab = tab;
  }
}

interface Tab {
  title: string;
  template: any;
}
