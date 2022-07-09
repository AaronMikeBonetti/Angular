import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildLessonComponent } from './view-child-lesson.component';

describe('ViewChildLessonComponent', () => {
  let component: ViewChildLessonComponent;
  let fixture: ComponentFixture<ViewChildLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChildLessonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
