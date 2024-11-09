import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsLessonComponent } from './signals-lesson.component';

describe('SignalsLessonComponent', () => {
  let component: SignalsLessonComponent;
  let fixture: ComponentFixture<SignalsLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsLessonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalsLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
