import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizdbComponent } from './quizdb.component';

describe('QuizdbComponent', () => {
  let component: QuizdbComponent;
  let fixture: ComponentFixture<QuizdbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizdbComponent]
    });
    fixture = TestBed.createComponent(QuizdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
