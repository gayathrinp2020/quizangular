import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
})
export class TabComponent {
  @Input() tabs: Tab[] = [];
  @Input() activeTab: Tab | undefined;

  selectTab(tab: Tab) {
    this.activeTab = tab; // Update the property name here if needed
  }
}

interface Tab {
  title: string;
  template: any;
}
