import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableLessonComponent } from './observable-lesson.component';

describe('ObservableLessonComponent', () => {
  let component: ObservableLessonComponent;
  let fixture: ComponentFixture<ObservableLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservableLessonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
