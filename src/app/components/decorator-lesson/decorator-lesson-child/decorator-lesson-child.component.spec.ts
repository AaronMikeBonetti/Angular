import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoratorLessonChildComponent } from './decorator-lesson-child.component';

describe('DecoratorLessonChildComponent', () => {
  let component: DecoratorLessonChildComponent;
  let fixture: ComponentFixture<DecoratorLessonChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecoratorLessonChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoratorLessonChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
