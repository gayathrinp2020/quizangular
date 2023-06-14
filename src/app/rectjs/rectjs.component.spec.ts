import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectjsComponent } from './rectjs.component';

describe('RectjsComponent', () => {
  let component: RectjsComponent;
  let fixture: ComponentFixture<RectjsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RectjsComponent]
    });
    fixture = TestBed.createComponent(RectjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
