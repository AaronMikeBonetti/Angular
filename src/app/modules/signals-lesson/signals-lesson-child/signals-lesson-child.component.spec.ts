import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsLessonChildComponent } from './signals-lesson-child.component';

describe('SignalsLessonChildComponent', () => {
  let component: SignalsLessonChildComponent;
  let fixture: ComponentFixture<SignalsLessonChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsLessonChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsLessonChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
