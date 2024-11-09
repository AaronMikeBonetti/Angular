import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxLessonComponent } from './ngrx-lesson.component';

describe('NgrxLessonComponent', () => {
  let component: NgrxLessonComponent;
  let fixture: ComponentFixture<NgrxLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [NgrxLessonComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
