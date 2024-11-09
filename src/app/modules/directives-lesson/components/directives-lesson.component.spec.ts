import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesLessonComponent } from './directives-lesson.component';

describe('DirectivesLessonComponent', () => {
  let component: DirectivesLessonComponent;
  let fixture: ComponentFixture<DirectivesLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [DirectivesLessonComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
