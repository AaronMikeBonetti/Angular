import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsLessonComponent } from './rxjs-lesson.component';

describe('RxjsLessonComponent', () => {
  let component: RxjsLessonComponent;
  let fixture: ComponentFixture<RxjsLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsLessonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
