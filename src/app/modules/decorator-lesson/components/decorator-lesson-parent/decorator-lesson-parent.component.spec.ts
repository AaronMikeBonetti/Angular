import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoratorLessonComponent } from './decorator-lesson-parent.component';

describe('DecoratorLessonComponent', () => {
  let component: DecoratorLessonComponent;
  let fixture: ComponentFixture<DecoratorLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [DecoratorLessonComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoratorLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
