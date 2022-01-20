import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeLessonComponent } from './pipe-lesson.component';

describe('PipeLessonComponent', () => {
  let component: PipeLessonComponent;
  let fixture: ComponentFixture<PipeLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeLessonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
