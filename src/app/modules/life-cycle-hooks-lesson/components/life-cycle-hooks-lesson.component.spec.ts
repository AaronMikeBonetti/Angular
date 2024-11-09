import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleHooksLessonComponent } from './life-cycle-hooks-lesson.component';

describe('LifeCycleHooksLessonComponent', () => {
  let component: LifeCycleHooksLessonComponent;
  let fixture: ComponentFixture<LifeCycleHooksLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [LifeCycleHooksLessonComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCycleHooksLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
