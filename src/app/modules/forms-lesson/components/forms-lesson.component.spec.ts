import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsLessonComponent } from './forms-lesson.component';

describe('FormsLessonComponent', () => {
  let component: FormsLessonComponent;
  let fixture: ComponentFixture<FormsLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsLessonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
