import {
  Component,
  OnInit,
  Injector,
  ComponentRef,
  ViewChild,
  ViewContainerRef,
  Type,
  ComponentFactoryResolver,
  AfterViewInit,
} from '@angular/core';
import { QuizdbComponent } from '../quizdb/quizdb.component';

@Component({
  selector: 'app-python',
  templateUrl: './python.component.html',
  styleUrls: ['./python.component.css'],
})
export class PythonComponent implements OnInit, AfterViewInit {
  selectedTab: Tab | undefined;
  customInjector: Injector;
  componentRef: ComponentRef<any> | undefined;

  tabs: Tab[] = [
    {
      title: 'Basics',
      component: QuizdbComponent,
      quizTopic: 'Python Basic',
    },
    {
      title: 'Control Flow',
      component: QuizdbComponent,
      quizTopic: 'Python Control Flow',
    },
    {
      title: 'Data Types',
      component: QuizdbComponent,
      quizTopic: 'Python Data Types',
    },
    {
      title: 'Functions',
      component: QuizdbComponent,
      quizTopic: 'Python Functions',
    },
  ];

  @ViewChild('dynamicComponent', { read: ViewContainerRef })
  dynamicComponentContainer!: ViewContainerRef;

  constructor(
    private injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.customInjector = Injector.create({
      providers: [],
      parent: this.injector,
    });
  }

  ngOnInit() {
    this.selectedTab = this.tabs[0]; // Select the first tab by default
  }

  ngAfterViewInit() {
    this.updateCustomInjector();
  }

  selectTab(tab: Tab) {
    this.selectedTab = tab;
    this.updateCustomInjector();
  }

  private updateCustomInjector() {
    if (
      this.selectedTab &&
      this.selectedTab.component &&
      this.selectedTab.quizTopic
    ) {
      if (this.componentRef) {
        this.componentRef.destroy(); // Destroy the existing component if present
      }

      const componentFactory =
        this.componentFactoryResolver.resolveComponentFactory(
          this.selectedTab.component
        );

      this.dynamicComponentContainer.clear(); // Clear the container before creating a new component

      this.componentRef = this.dynamicComponentContainer.createComponent(
        componentFactory,
        undefined,
        this.customInjector
      );

      const componentInstance = this.componentRef.instance;
      componentInstance.quizTopic = this.selectedTab.quizTopic; // Pass the quizTopic value to the component instance
    } else {
      if (this.componentRef) {
        this.componentRef.destroy(); // Destroy the existing component if present
        this.componentRef = undefined;
      }
    }
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy(); // Destroy the component on component destroy
    }
  }
}

interface Tab {
  title: string;
  component: Type<any>;
  quizTopic?: string;
}
