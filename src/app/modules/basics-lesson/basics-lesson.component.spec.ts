import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicsLessonComponent } from './basics-lesson.component';

describe('BasicsLessonComponent', () => {
  let component: BasicsLessonComponent;
  let fixture: ComponentFixture<BasicsLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicsLessonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicsLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
